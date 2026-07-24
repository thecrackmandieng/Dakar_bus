import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, computed, effect, inject, signal, viewChild } from '@angular/core';
import * as L from 'leaflet';
import { FleetService } from '../core/fleet.service';
import { BusLoadState, MobileVehicle } from '../core/fleet.model';

type MobileView = 'map' | 'list';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss', 'home-map-layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class HomePage implements AfterViewInit, OnDestroy {
  readonly fleet = inject(FleetService);
  readonly mapContainer = viewChild.required<ElementRef<HTMLDivElement>>('mapContainer');
  readonly activeView = signal<MobileView>('map');
  readonly search = signal('');
  readonly selectedLine = signal('all');
  readonly selectedState = signal<BusLoadState | 'all'>('all');
  readonly selectedVehicleId = signal<string | null>(null);
  readonly selectedVehicle = computed(() => this.fleet.vehicles().find(({ id }) => id === this.selectedVehicleId()) ?? null);
  readonly mapReady = signal(false);
  readonly lines = computed(() => [...new Map(this.fleet.vehicles().filter(({ lineNumber }) => lineNumber !== '—').map(({ lineNumber, lineName }) => [lineNumber, lineName])).entries()].map(([number, name]) => ({ number, name })).sort((a, b) => a.number.localeCompare(b.number, 'fr', { numeric: true })));
  readonly filteredVehicles = computed(() => {
    const search = this.search().trim().toLocaleLowerCase('fr');
    return this.fleet.vehicles().filter((vehicle) => {
      const matchesSearch = !search || `${vehicle.busNumber} ${vehicle.registration} ${vehicle.lineNumber} ${vehicle.lineName}`.toLocaleLowerCase('fr').includes(search);
      return matchesSearch && (this.selectedLine() === 'all' || vehicle.lineNumber === this.selectedLine()) && (this.selectedState() === 'all' || vehicle.state === this.selectedState());
    });
  });
  readonly counters = computed(() => ({
    total: this.fleet.vehicles().length,
    full: this.fleet.vehicles().filter(({ state }) => state === 'full').length,
    overloaded: this.fleet.vehicles().filter(({ state }) => state === 'overloaded').length
  }));

  private map: L.Map | null = null;
  private markerLayer: L.LayerGroup | null = null;
  private mapResizeObserver: ResizeObserver | null = null;
  private resizeFrame: number | null = null;
  private hasCenteredMap = false;

  constructor() {
    effect(() => {
      const ready = this.mapReady();
      const vehicles = this.filteredVehicles();
      if (!ready || !this.markerLayer || !this.map) {
        return;
      }
      this.markerLayer.clearLayers();
      const coordinates: L.LatLngTuple[] = [];
      for (const vehicle of vehicles) {
        const coordinate: L.LatLngTuple = [vehicle.latitude, vehicle.longitude];
        coordinates.push(coordinate);
        const content = document.createElement('div');
        content.className = `mobile-bus-marker ${vehicle.state}`;
        const bus = document.createElement('strong');
        const line = document.createElement('span');
        bus.textContent = vehicle.busNumber;
        line.textContent = `L${vehicle.lineNumber}`;
        content.append(bus, line);
        L.marker(coordinate, { icon: L.divIcon({ html: content, className: 'mobile-marker-shell', iconSize: [66, 48], iconAnchor: [33, 24] }) })
          .on('click', () => this.selectedVehicleId.set(vehicle.id))
          .addTo(this.markerLayer);
      }
      if (coordinates.length && !this.hasCenteredMap) {
        this.map.fitBounds(L.latLngBounds(coordinates).pad(.25), { maxZoom: 15, animate: false });
        this.hasCenteredMap = true;
      }
    });
  }

  ngAfterViewInit(): void {
    const container = this.mapContainer().nativeElement;
    this.map = L.map(container, { center: [14.7167, -17.4677], zoom: 12, zoomControl: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap'
    }).addTo(this.map);
    L.control.zoom({ position: 'bottomright' }).addTo(this.map);
    this.markerLayer = L.layerGroup().addTo(this.map);
    this.mapResizeObserver = new ResizeObserver(() => this.scheduleMapResize());
    this.mapResizeObserver.observe(container);
    this.mapReady.set(true);
    this.scheduleMapResize();
  }

  ngOnDestroy(): void {
    this.mapResizeObserver?.disconnect();
    if (this.resizeFrame !== null) {
      window.cancelAnimationFrame(this.resizeFrame);
    }
    this.map?.remove();
  }

  setSearch(event: CustomEvent): void {
    this.search.set(String(event.detail.value ?? ''));
    this.hasCenteredMap = false;
  }

  setLine(event: CustomEvent): void {
    this.selectedLine.set(String(event.detail.value ?? 'all'));
    this.hasCenteredMap = false;
  }

  setState(state: BusLoadState | 'all'): void {
    this.selectedState.set(state);
    this.hasCenteredMap = false;
  }

  setView(view: MobileView): void {
    this.activeView.set(view);
    if (view === 'map') {
      this.scheduleMapResize();
    }
  }

  private scheduleMapResize(): void {
    if (this.resizeFrame !== null) {
      window.cancelAnimationFrame(this.resizeFrame);
    }
    this.resizeFrame = window.requestAnimationFrame(() => {
      this.map?.invalidateSize({ pan: false, debounceMoveend: true });
      this.resizeFrame = null;
    });
  }
}
