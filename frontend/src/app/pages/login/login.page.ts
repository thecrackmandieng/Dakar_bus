import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, UserRole } from '../../core/auth.service';
import { AlertSoundService } from '../../core/alert-sound.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', './login-access.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage {
  readonly form = new FormGroup({
    role: new FormControl<UserRole>('admin', { nonNullable: true }),
    login: new FormControl('dieng.tech', { nonNullable: true, validators: Validators.required }),
    password: new FormControl('dieng123', { nonNullable: true, validators: Validators.required })
  });
  readonly error = signal('');

  constructor(private readonly auth: AuthService, private readonly alertSound: AlertSoundService) {}

  submit(): void {
    this.error.set('');
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.error.set('Renseigne ton identifiant et ton mot de passe.');
      return;
    }

    const { login, password, role } = this.form.getRawValue();

    const validIdentifier = role === 'admin'
      ? login === 'dieng.tech'
      : login.toLowerCase().includes('chauffeur');

    if (validIdentifier && password === 'dieng123') {
      this.alertSound.enable();
      this.auth.login(login, role);
      return;
    }

    this.error.set('Identifiant ou mot de passe incorrect.');
  }

  selectRole(role: UserRole): void {
    this.form.controls.role.setValue(role);
    this.form.controls.login.setValue(role === 'admin' ? 'dieng.tech' : 'chauffeur');
    this.error.set('');
  }
}
