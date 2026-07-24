import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
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
    login: new FormControl('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl('', { nonNullable: true, validators: Validators.required })
  });
  readonly error = signal('');
  readonly submitting = signal(false);
  readonly submitLabel = computed(() => this.submitting() ? 'Connexion…' : 'Se connecter');
  readonly passwordVisible = signal(false);
  readonly passwordType = computed(() => this.passwordVisible() ? 'text' : 'password');
  readonly passwordToggleLabel = computed(() => this.passwordVisible()
    ? 'Masquer le mot de passe'
    : 'Afficher le mot de passe'
  );

  constructor(private readonly auth: AuthService, private readonly alertSound: AlertSoundService) {}

  async submit(): Promise<void> {
    this.error.set('');
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      this.error.set('Renseigne ton identifiant et ton mot de passe.');
      return;
    }

    const { login, password } = this.form.getRawValue();
    this.submitting.set(true);

    try {
      if (await this.auth.login(login, password)) {
        this.alertSound.enable();
        return;
      }
      this.error.set('Identifiant ou mot de passe incorrect.');
    } catch {
      this.error.set('Le service de connexion est momentanément indisponible.');
    } finally {
      this.submitting.set(false);
    }
  }

  // Gestionnaire dédié requis comme frontière entre l'événement du template et le Signal OnPush.
  togglePasswordVisibility(): void {
    this.passwordVisible.update(visible => !visible);
  }
}
