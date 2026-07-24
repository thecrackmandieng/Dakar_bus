import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RealtimeService } from '../../core/realtime.service';
import { FleetService } from '../../core/fleet.service';
import { FleetMapComponent } from '../../shared/fleet-map/fleet-map.component';
import { AlertSoundService } from '../../core/alert-sound.service';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-chauffeur',
  standalone: true,
  imports: [FleetMapComponent],
  templateUrl: './chauffeur.page.html',
  styleUrls: ['./chauffeur.page.scss', './chauffeur-actions.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChauffeurPage {
  readonly realtime = inject(RealtimeService);
  readonly fleet = inject(FleetService);
  readonly auth = inject(AuthService);
  private readonly alertSound = inject(AlertSoundService);
  private wasOverloaded = false;
  readonly soundEnabled = this.alertSound.enabled;
  readonly soundButtonLabel = computed(() => this.soundEnabled() ? 'Son activé' : 'Activer le son');
  readonly data = this.realtime.telemetry;
  readonly vehicle = computed(() => {
    const busId = this.data()?.busId;
    return this.fleet.vehicles().find(({ id, busNumber }) => id === busId || busNumber === busId) ?? null;
  });
  readonly capacity = computed(() => this.vehicle()?.capacity ?? this.data()?.capacity ?? 0);
  readonly occupancy = computed(() => {
    const telemetry = this.data();
    const capacity = this.capacity();
    return telemetry && capacity > 0 ? Math.round(telemetry.passengers.passagers / capacity * 100) : 0;
  });
  readonly occupancyProgress = computed(() => Math.min(this.occupancy(), 100));
  readonly loadState = computed(() => {
    const telemetry = this.data();
    const passengers = telemetry?.passengers.passagers ?? 0;
    const capacity = this.capacity();
    return passengers > capacity ? { label: 'BUS SURCHARGÉ', tone: 'danger' } :
      passengers === capacity && capacity > 0 ? { label: 'BUS PLEIN', tone: 'full' } :
      passengers >= capacity * .8 ? { label: 'Presque complet', tone: 'warning' } :
      { label: 'Capacité normale', tone: 'safe' };
  });

  constructor() {
    effect(() => {
      const telemetry = this.data();
      const overloaded = !!telemetry && telemetry.passengers.passagers > this.capacity();
      if (overloaded && !this.wasOverloaded) {
        this.alertSound.playOverload();
      } else if (!overloaded) {
        this.alertSound.stopOverload();
      }
      this.wasOverloaded = overloaded;
    });
  }

  toggleAlertSound(): void {
    this.alertSound.toggle();
    const telemetry = this.data();
    if (this.alertSound.enabled() && telemetry && telemetry.passengers.passagers > this.capacity()) {
      this.alertSound.playOverload();
    }
  }
}
