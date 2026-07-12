import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, computed, effect, input, signal, viewChild } from '@angular/core';
import * as L from 'leaflet';
import { FleetVehicle } from '../../core/fleet.service';

@Component({
  selector: 'app-fleet-map',
  standalone: true,
  templateUrl: './fleet-map.component.html',
  styleUrl: './fleet-map.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FleetMapComponent implements AfterViewInit, OnDestroy {
  readonly vehicles = input.required<readonly FleetVehicle[]>();
  readonly currentBusId = input<string | null>(null);
  readonly selectedLine = signal('all');
  readonly mapContainer = viewChild.required<ElementRef<HTMLDivElement>>('mapContainer');
  readonly lines = computed(() => [...new Map(this.validVehicles().filter(({ lineNumber }) => lineNumber).map(({ lineNumber, lineName }) => [lineNumber, lineName])).entries()]
    .map(([number, name]) => ({ number, name }))
    .sort((first, second) => first.number.localeCompare(second.number, 'fr', { numeric: true })));
  readonly visibleCount = computed(() => this.filteredVehicles().length);

  private readonly mapReady = signal(false);
  private readonly routeHistory = new Map<string, L.LatLngTuple[]>();
  private map: L.Map | null = null;
  private vehicleLayers: L.LayerGroup | null = null;
  private hasInitialBounds = false;
  private lastFittedLine = '';

  constructor() {
    effect(() => {
      const ready = this.mapReady();
      const allVehicles = this.validVehicles();
      const vehicles = this.filteredVehicles();
      if (!ready || !this.map || !this.vehicleLayers) {
        return;
      }

      this.vehicleLayers.clearLayers();
      const visibleCoordinates: L.LatLngTuple[] = [];

      for (const vehicle of allVehicles) {
        const coordinate: L.LatLngTuple = [vehicle.latitude, vehicle.longitude];
        const history = this.routeHistory.get(vehicle.id) ?? [];
        const lastPosition = history.at(-1);
        if (!lastPosition || lastPosition[0] !== coordinate[0] || lastPosition[1] !== coordinate[1]) {
          history.push(coordinate);
          if (history.length > 500) {
            history.shift();
          }
          this.routeHistory.set(vehicle.id, history);
        }
      }

      for (const vehicle of vehicles) {
        const coordinate: L.LatLngTuple = [vehicle.latitude, vehicle.longitude];
        visibleCoordinates.push(coordinate);
        const history = this.routeHistory.get(vehicle.id) ?? [];

        const overloaded = vehicle.passengers > vehicle.capacity;
        const isCurrent = vehicle.id === this.currentBusId();
        const color = overloaded ? '#dc2626' : isCurrent ? '#2563eb' : '#087d76';
        const marker = L.circleMarker(coordinate, {
          radius: isCurrent ? 12 : 10,
          color: '#ffffff',
          weight: 3,
          fillColor: color,
          fillOpacity: 1
        });
        const lineLabel = vehicle.lineNumber ? `${vehicle.lineNumber} · ${vehicle.lineName}` : vehicle.lineName;
        marker.bindTooltip(`Bus ${vehicle.busNumber} · ${lineLabel}`, { permanent: true, direction: 'top', className: 'bus-line-tooltip' });
        const popup = document.createElement('div');
        const title = document.createElement('strong');
        const details = document.createElement('p');
        title.textContent = `Bus ${vehicle.busNumber} · ${lineLabel}`;
        details.textContent = `${vehicle.registration} · ${vehicle.speed} km/h · ${vehicle.passengers}/${vehicle.capacity} passagers`;
        popup.append(title, details);
        marker.bindPopup(popup);
        marker.addTo(this.vehicleLayers);

        if (history.length > 1) {
          L.polyline(history, { color, weight: isCurrent ? 5 : 3, opacity: .75, dashArray: isCurrent ? undefined : '7 7' }).addTo(this.vehicleLayers);
        }
      }

      const selectedLine = this.selectedLine();
      if (visibleCoordinates.length && (!this.hasInitialBounds || selectedLine !== this.lastFittedLine)) {
        this.map.fitBounds(L.latLngBounds(visibleCoordinates).pad(.2), { maxZoom: 16, animate: false });
        this.hasInitialBounds = true;
        this.lastFittedLine = selectedLine;
      }
    });
  }

  ngAfterViewInit(): void {
    this.map = L.map(this.mapContainer().nativeElement, { center: [14.7167, -17.4677], zoom: 12, zoomControl: true });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
    this.vehicleLayers = L.layerGroup().addTo(this.map);
    this.mapReady.set(true);
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  selectLine(event: Event): void {
    this.selectedLine.set((event.target as HTMLSelectElement).value);
  }

  private validVehicles(): readonly FleetVehicle[] {
    return this.vehicles().filter(({ latitude, longitude }) => Number.isFinite(latitude) && Number.isFinite(longitude) && latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180);
  }

  private filteredVehicles(): readonly FleetVehicle[] {
    const vehicles = this.validVehicles();
    return this.selectedLine() === 'all' ? vehicles : vehicles.filter(({ lineNumber }) => lineNumber === this.selectedLine());
  }
}
