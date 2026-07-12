import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bus } from '../bus/bus.model';
import { BusService } from '../bus/bus.service';
import { Lignes } from '../lignes/lignes.model';
import { LignesService } from '../lignes/lignes.service';
import { AffectationLigne } from '../trajets/trajets.model';
import { TrajetsService } from '../trajets/trajets.service';

@Component({
  selector: 'app-affectations-lignes',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './affectations-lignes.page.html',
  styleUrl: './affectations-lignes.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AffectationsLignesPage implements OnInit {
  private readonly busService = inject(BusService);
  private readonly lignesService = inject(LignesService);
  private readonly trajetsService = inject(TrajetsService);
  readonly buses = signal<Bus[]>([]);
  readonly lignes = signal<Lignes[]>([]);
  readonly assignments = signal<AffectationLigne[]>([]);
  readonly loading = signal(false);
  readonly error = signal('');
  readonly success = signal('');
  readonly form = new FormGroup({
    idBus: new FormControl('', { nonNullable: true, validators: Validators.required }),
    idLigne: new FormControl('', { nonNullable: true, validators: Validators.required })
  });

  ngOnInit(): void { void this.load(); }

  selectAssignment(assignment: AffectationLigne): void {
    this.form.setValue({ idBus: assignment.idBus, idLigne: assignment.idLigne });
    this.error.set('');
    this.success.set('');
  }

  async assign(): Promise<void> {
    this.form.markAllAsTouched();
    if (this.form.invalid) { return; }
    this.loading.set(true);
    this.error.set('');
    try {
      const { idBus, idLigne } = this.form.getRawValue();
      await this.trajetsService.assign(idBus, idLigne);
      this.success.set('Le bus a été affecté à la ligne. La carte sera actualisée automatiquement.');
      await this.load();
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Affectation impossible.');
    } finally {
      this.loading.set(false);
    }
  }

  private async load(): Promise<void> {
    this.loading.set(true);
    try {
      const [buses, lignes, assignments] = await Promise.all([this.busService.list(), this.lignesService.list(), this.trajetsService.activeAssignments()]);
      this.buses.set(buses.filter(({ actif }) => actif));
      this.lignes.set(lignes.filter(({ actif }) => actif));
      this.assignments.set(assignments);
    } catch (error) {
      this.error.set(error instanceof Error ? error.message : 'Chargement impossible.');
    } finally {
      this.loading.set(false);
    }
  }
}
