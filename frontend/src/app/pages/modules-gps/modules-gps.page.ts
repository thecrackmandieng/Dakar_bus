import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bus } from '../bus/bus.model';
import { BusService } from '../bus/bus.service';
import { ConnectedGpsModule, ModuleGps } from './modules-gps.model';
import { ModulesGpsService } from './modules-gps.service';

@Component({
  selector: 'app-modules-gps',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modules-gps.page.html',
  styleUrls: ['./modules-gps.page.scss', './modules-gps-detection.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModulesGpsPage implements OnInit {
  private readonly service = inject(ModulesGpsService);
  private readonly busService = inject(BusService);
  readonly modules = signal<ModuleGps[]>([]);
  readonly buses = signal<Bus[]>([]);
  readonly connectedModules = signal<ConnectedGpsModule[]>([]);
  readonly editingId = signal<string | null>(null);
  readonly loading = signal(false);
  readonly error = signal('');
  readonly success = signal('');
  readonly form = new FormGroup({
    identifiantModule: new FormControl('', { nonNullable: true, validators: Validators.required }),
    nomModule: new FormControl('', { nonNullable: true, validators: Validators.required }),
    idBus: new FormControl('', { nonNullable: true, validators: Validators.required }),
    actif: new FormControl(true, { nonNullable: true })
  });

  ngOnInit(): void {
    void this.load();
  }

  edit(module: ModuleGps): void {
    this.editingId.set(module.idModule);
    this.form.setValue({ identifiantModule: module.identifiantModule, nomModule: module.nomModule, idBus: module.idBus ?? '', actif: module.actif });
    this.error.set('');
    this.success.set('');
  }

  cancel(): void {
    this.editingId.set(null);
    this.form.reset({ identifiantModule: '', nomModule: '', idBus: '', actif: true });
  }

  async save(): Promise<void> {
    this.form.markAllAsTouched();
    if (this.form.invalid) { return; }
    this.loading.set(true);
    this.error.set('');
    try {
      await this.service.save(this.editingId(), this.form.getRawValue());
      this.success.set(this.editingId() ? 'Module GPS modifié.' : 'Module GPS ajouté.');
      this.cancel();
      await this.load();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Enregistrement impossible.');
    } finally {
      this.loading.set(false);
    }
  }

  async remove(module: ModuleGps): Promise<void> {
    this.loading.set(true);
    this.error.set('');
    try {
      await this.service.remove(module.idModule);
      this.success.set(`Module ${module.nomModule} supprimé.`);
      await this.load();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Suppression impossible.');
    } finally {
      this.loading.set(false);
    }
  }

  private async load(): Promise<void> {
    this.loading.set(true);
    try {
      const [modules, buses, connectedModules] = await Promise.all([this.service.list(), this.busService.list(), this.service.connected()]);
      this.modules.set(modules);
      this.buses.set(buses.filter(({ actif }) => actif));
      this.connectedModules.set(connectedModules);
      if (!this.editingId() && !this.form.controls.identifiantModule.value && connectedModules.length) {
        this.form.controls.identifiantModule.setValue(connectedModules[0].identifiantModule);
        this.form.controls.nomModule.setValue(`GPS ${connectedModules[0].identifiantModule}`);
      }
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Chargement impossible.');
    } finally {
      this.loading.set(false);
    }
  }
}
