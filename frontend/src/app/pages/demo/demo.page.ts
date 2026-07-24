import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { RealtimeService } from '../../core/realtime.service';
import { FleetService } from '../../core/fleet.service';
import { FleetMapComponent } from '../../shared/fleet-map/fleet-map.component';
import { AlertSoundService } from '../../core/alert-sound.service';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [FleetMapComponent],
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss', './demo-counter.scss', './demo-counter-scale.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoPage {
  readonly fleet = inject(FleetService);
  readonly alertSound = inject(AlertSoundService);
  readonly soundEnabled = this.alertSound.enabled;
  readonly overloadAlerts = computed(() => this.fleet.vehicles().filter(({ passengers, capacity }) => passengers > capacity));
  readonly resettingBusId = signal<string | null>(null);
  readonly counterMessage = signal('');
  readonly counterMessageTone = signal<'success' | 'error'>('success');
  readonly counterSearch = signal('');
  readonly counterPage = signal(1);
  readonly counterPageSize = 6;
  readonly counterCards = computed(() => {
    const connectedBusId = this.realtime.telemetry()?.busId;
    const resettingBusId = this.resettingBusId();
    return this.fleet.vehicles().map((vehicle) => {
      const percentage = vehicle.capacity > 0 ? Math.round(vehicle.passengers / vehicle.capacity * 100) : 0;
      const status = vehicle.passengers > vehicle.capacity
        ? { label: 'Surcharge', tone: 'danger' }
        : vehicle.passengers === vehicle.capacity
          ? { label: 'Plein', tone: 'full' }
          : { label: 'Disponible', tone: 'available' };
      const canReset = vehicle.id === connectedBusId;
      const isResetting = resettingBusId === vehicle.id;
      return {
        ...vehicle,
        percentage,
        gaugeWidth: Math.min(percentage, 100),
        status,
        lineLabel: vehicle.lineNumber ? `${vehicle.lineNumber} · ${vehicle.lineName}` : 'Non affectée',
        resetDisabled: resettingBusId !== null || !canReset,
        resetLabel: isResetting ? 'Initialisation en cours…' : canReset ? 'Initialiser le compteur' : 'Capteur non connecté'
      };
    });
  });
  readonly filteredCounterCards = computed(() => {
    const search = this.counterSearch().trim().toLocaleLowerCase('fr');
    return search ? this.counterCards().filter(({ busNumber, registration, lineLabel }) =>
      `${busNumber} ${registration} ${lineLabel}`.toLocaleLowerCase('fr').includes(search)) : this.counterCards();
  });
  readonly counterTotalPages = computed(() => Math.max(1, Math.ceil(this.filteredCounterCards().length / this.counterPageSize)));
  readonly visibleCounterCards = computed(() => {
    const validPage = Math.min(this.counterPage(), this.counterTotalPages());
    const start = (validPage - 1) * this.counterPageSize;
    return this.filteredCounterCards().slice(start, start + this.counterPageSize);
  });
  private previousOverloadedIds = new Set<string>();
  readonly stats = computed(() => {
    const live = this.realtime.telemetry();
    const vehicles = this.fleet.vehicles();
    const passengerCount = vehicles.reduce((total, { passengers }) => total + passengers, 0);
    return [
      { label: 'Bus avec GPS', value: String(vehicles.length), trend: 'Flotte en direct', tone: 'green' },
      { label: 'Entrées IR', value: String(live?.passengers.entrees ?? 0), trend: "Aujourd’hui", tone: 'blue' },
      { label: 'Passagers à bord', value: String(passengerCount), trend: 'Toute la flotte', tone: 'violet' },
      { label: 'Bus en surcharge', value: String(vehicles.filter(({ passengers, capacity }) => passengers > capacity).length), trend: 'Seuil capacité', tone: 'red' }
    ];
  });
  readonly operations = computed(() => {
    const vehicles = this.fleet.vehicles();
    const totalCapacity = vehicles.reduce((total, { capacity }) => total + capacity, 0);
    const passengers = vehicles.reduce((total, vehicle) => total + vehicle.passengers, 0);
    const averageOccupancy = totalCapacity ? Math.round(passengers / totalCapacity * 100) : 0;
    return [
      { label: 'Occupation moyenne', value: `${averageOccupancy}%`, detail: `${passengers} passagers sur ${totalCapacity} places` },
      { label: 'Positions GPS actives', value: String(vehicles.length), detail: 'Coordonnées valides reçues' },
      { label: 'Capacité totale suivie', value: String(totalCapacity), detail: 'Places disponibles sur la flotte' }
    ];
  });

  constructor(readonly realtime: RealtimeService) {
    effect(() => {
      const overloaded = this.fleet.vehicles().filter(({ passengers, capacity }) => passengers > capacity);
      const currentIds = new Set(overloaded.map(({ id }) => id));
      const hasNewAlert = overloaded.some(({ id }) => !this.previousOverloadedIds.has(id));
      this.previousOverloadedIds = currentIds;

      if (hasNewAlert) {
        this.alertSound.playOverload();
      } else if (overloaded.length === 0) {
        this.alertSound.stopOverload();
      }
    });
  }

  toggleAlertSound(): void {
    this.alertSound.toggle();
    if (this.alertSound.enabled() && this.overloadAlerts().length > 0) {
      this.alertSound.playOverload();
    }
  }

  searchCounters(event: Event): void {
    this.counterSearch.set((event.target as HTMLInputElement).value);
    this.counterPage.set(1);
  }

  previousCounterPage(): void {
    this.counterPage.update((page) => Math.max(1, page - 1));
  }

  nextCounterPage(): void {
    this.counterPage.update((page) => Math.min(this.counterTotalPages(), page + 1));
  }

  async resetCounter(busId: string): Promise<void> {
    this.resettingBusId.set(busId);
    this.counterMessage.set('');
    try {
      await this.realtime.resetPassengerCounter(busId);
      const busNumber = this.counterCards().find(({ id }) => id === busId)?.busNumber ?? busId;
      this.counterMessageTone.set('success');
      this.counterMessage.set(`Le compteur du bus ${busNumber} a été initialisé.`);
    } catch (error) {
      this.counterMessageTone.set('error');
      this.counterMessage.set(error instanceof Error ? error.message : 'Initialisation impossible.');
    } finally {
      this.resettingBusId.set(null);
    }
  }

}
