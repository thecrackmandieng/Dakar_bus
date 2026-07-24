import { ChangeDetectionStrategy, Component, computed, effect, input, signal, viewChild } from '@angular/core';
import * as L from 'leaflet';
import * as i0 from "@angular/core";
const _c0 = ["mapContainer"];
const _forTrack0 = ($index, $item) => $item.number;
function FleetMapComponent_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const line_r1 = ctx.$implicit;
    i0.ɵɵdomProperty("value", line_r1.number);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", line_r1.number, " \u00B7 ", line_r1.name);
} }
export class FleetMapComponent {
    vehicles = input.required(...(ngDevMode ? [{ debugName: "vehicles" }] : /* istanbul ignore next */ []));
    currentBusId = input(null, ...(ngDevMode ? [{ debugName: "currentBusId" }] : /* istanbul ignore next */ []));
    selectedLine = signal('all', ...(ngDevMode ? [{ debugName: "selectedLine" }] : /* istanbul ignore next */ []));
    mapContainer = viewChild.required('mapContainer');
    lines = computed(() => [...new Map(this.validVehicles().filter(({ lineNumber }) => lineNumber).map(({ lineNumber, lineName }) => [lineNumber, lineName])).entries()]
        .map(([number, name]) => ({ number, name }))
        .sort((first, second) => first.number.localeCompare(second.number, 'fr', { numeric: true })), ...(ngDevMode ? [{ debugName: "lines" }] : /* istanbul ignore next */ []));
    visibleCount = computed(() => this.filteredVehicles().length, ...(ngDevMode ? [{ debugName: "visibleCount" }] : /* istanbul ignore next */ []));
    mapReady = signal(false, ...(ngDevMode ? [{ debugName: "mapReady" }] : /* istanbul ignore next */ []));
    routeHistory = new Map();
    map = null;
    vehicleLayers = null;
    hasInitialBounds = false;
    lastFittedLine = '';
    constructor() {
        effect(() => {
            const ready = this.mapReady();
            const allVehicles = this.validVehicles();
            const vehicles = this.filteredVehicles();
            if (!ready || !this.map || !this.vehicleLayers) {
                return;
            }
            this.vehicleLayers.clearLayers();
            const visibleCoordinates = [];
            for (const vehicle of allVehicles) {
                const coordinate = [vehicle.latitude, vehicle.longitude];
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
                const coordinate = [vehicle.latitude, vehicle.longitude];
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
    ngAfterViewInit() {
        this.map = L.map(this.mapContainer().nativeElement, { center: [14.7167, -17.4677], zoom: 12, zoomControl: true });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(this.map);
        this.vehicleLayers = L.layerGroup().addTo(this.map);
        this.mapReady.set(true);
    }
    ngOnDestroy() {
        this.map?.remove();
    }
    selectLine(event) {
        this.selectedLine.set(event.target.value);
    }
    validVehicles() {
        return this.vehicles().filter(({ latitude, longitude }) => Number.isFinite(latitude) && Number.isFinite(longitude) && latitude >= -90 && latitude <= 90 && longitude >= -180 && longitude <= 180);
    }
    filteredVehicles() {
        const vehicles = this.validVehicles();
        return this.selectedLine() === 'all' ? vehicles : vehicles.filter(({ lineNumber }) => lineNumber === this.selectedLine());
    }
    static ɵfac = function FleetMapComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FleetMapComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FleetMapComponent, selectors: [["app-fleet-map"]], viewQuery: function FleetMapComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuerySignal(ctx.mapContainer, _c0, 5);
        } if (rf & 2) {
            i0.ɵɵqueryAdvance();
        } }, inputs: { vehicles: [1, "vehicles"], currentBusId: [1, "currentBusId"] }, decls: 31, vars: 2, consts: [["mapContainer", ""], [1, "fleet-map"], [3, "change", "value"], ["value", "all"], [3, "value"], ["aria-label", "Carte GPS des v\u00E9hicules", 1, "map-canvas"], [1, "normal"], [1, "mine"], [1, "danger"], [1, "route-key"]], template: function FleetMapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 1)(1, "header")(2, "div")(3, "p");
            i0.ɵɵtext(4, "Carte GPS pr\u00E9cise");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "h2");
            i0.ɵɵtext(6, "V\u00E9hicules et itin\u00E9raires en temps r\u00E9el");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(7, "label");
            i0.ɵɵtext(8, "Filtrer par ligne ");
            i0.ɵɵdomElementStart(9, "select", 2);
            i0.ɵɵdomListener("change", function FleetMapComponent_Template_select_change_9_listener($event) { return ctx.selectLine($event); });
            i0.ɵɵdomElementStart(10, "option", 3);
            i0.ɵɵtext(11, "Toutes les lignes");
            i0.ɵɵdomElementEnd();
            i0.ɵɵrepeaterCreate(12, FleetMapComponent_For_13_Template, 2, 3, "option", 4, _forTrack0);
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElement(14, "div", 5, 0);
            i0.ɵɵdomElementStart(16, "footer")(17, "span");
            i0.ɵɵdomElement(18, "i", 6);
            i0.ɵɵtext(19, "En circulation");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(20, "span");
            i0.ɵɵdomElement(21, "i", 7);
            i0.ɵɵtext(22, "Mon bus");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(23, "span");
            i0.ɵɵdomElement(24, "i", 8);
            i0.ɵɵtext(25, "Surcharge");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(26, "span");
            i0.ɵɵdomElement(27, "i", 9);
            i0.ɵɵtext(28, "Itin\u00E9raire parcouru");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(29, "strong");
            i0.ɵɵtext(30);
            i0.ɵɵdomElementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(9);
            i0.ɵɵdomProperty("value", ctx.selectedLine());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.lines());
            i0.ɵɵadvance(18);
            i0.ɵɵtextInterpolate1("", ctx.visibleCount(), " v\u00E9hicule(s) avec GPS");
        } }, styles: ["[_nghost-%COMP%]{display:block}.fleet-map[_ngcontent-%COMP%]{overflow:hidden;border:1px solid #dbe7e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a12}.fleet-map[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{display:flex;align-items:end;justify-content:space-between;gap:18px;padding:18px 20px}.fleet-map[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .fleet-map[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.fleet-map[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#07877f;font-size:.72rem;font-weight:900;text-transform:uppercase}.fleet-map[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:4px;font-size:1.2rem}.fleet-map[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:grid;gap:5px;color:#64748b;font-size:.7rem;font-weight:800}.fleet-map[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{min-width:180px;padding:9px 32px 9px 11px;border:1px solid #cbdedd;border-radius:9px;background:#f7fbfb;color:#16494c;font-weight:750}.map-canvas[_ngcontent-%COMP%]{height:520px;background:#dfe9e7}.fleet-map[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;padding:12px 18px;color:#64748b;font-size:.7rem}.fleet-map[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;gap:5px}.fleet-map[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:50%;background:#087d76}.fleet-map[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .mine[_ngcontent-%COMP%]{background:#2563eb}.fleet-map[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%]{background:#dc2626}.fleet-map[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .route-key[_ngcontent-%COMP%]{width:18px;height:3px;border-radius:2px}.fleet-map[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-left:auto;color:#16494c}[_nghost-%COMP%]     .bus-line-tooltip{padding:3px 6px;border:0;border-radius:5px;background:#073f44;color:#fff;box-shadow:0 5px 14px #0f172a33;font-size:.68rem;font-weight:900}[_nghost-%COMP%]     .leaflet-tooltip-top::before{border-top-color:#073f44}@media(max-width:650px){.fleet-map[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{align-items:stretch;flex-direction:column}.fleet-map[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%}.map-canvas[_ngcontent-%COMP%]{height:420px}.fleet-map[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{flex-wrap:wrap}.fleet-map[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{width:100%;margin-left:0}}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FleetMapComponent, [{
        type: Component,
        args: [{ selector: 'app-fleet-map', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"fleet-map\">\n  <header>\n    <div><p>Carte GPS pr\u00E9cise</p><h2>V\u00E9hicules et itin\u00E9raires en temps r\u00E9el</h2></div>\n    <label>Filtrer par ligne\n      <select [value]=\"selectedLine()\" (change)=\"selectLine($event)\">\n        <option value=\"all\">Toutes les lignes</option>\n        @for (line of lines(); track line.number) { <option [value]=\"line.number\">{{ line.number }} \u00B7 {{ line.name }}</option> }\n      </select>\n    </label>\n  </header>\n  <div #mapContainer class=\"map-canvas\" aria-label=\"Carte GPS des v\u00E9hicules\"></div>\n  <footer><span><i class=\"normal\"></i>En circulation</span><span><i class=\"mine\"></i>Mon bus</span><span><i class=\"danger\"></i>Surcharge</span><span><i class=\"route-key\"></i>Itin\u00E9raire parcouru</span><strong>{{ visibleCount() }} v\u00E9hicule(s) avec GPS</strong></footer>\n</section>\n", styles: [":host{display:block}.fleet-map{overflow:hidden;border:1px solid #dbe7e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a12}.fleet-map header{display:flex;align-items:end;justify-content:space-between;gap:18px;padding:18px 20px}.fleet-map p,.fleet-map h2{margin:0}.fleet-map p{color:#07877f;font-size:.72rem;font-weight:900;text-transform:uppercase}.fleet-map h2{margin-top:4px;font-size:1.2rem}.fleet-map label{display:grid;gap:5px;color:#64748b;font-size:.7rem;font-weight:800}.fleet-map select{min-width:180px;padding:9px 32px 9px 11px;border:1px solid #cbdedd;border-radius:9px;background:#f7fbfb;color:#16494c;font-weight:750}.map-canvas{height:520px;background:#dfe9e7}.fleet-map footer{display:flex;align-items:center;gap:16px;padding:12px 18px;color:#64748b;font-size:.7rem}.fleet-map footer span{display:flex;align-items:center;gap:5px}.fleet-map footer i{width:9px;height:9px;border-radius:50%;background:#087d76}.fleet-map footer .mine{background:#2563eb}.fleet-map footer .danger{background:#dc2626}.fleet-map footer .route-key{width:18px;height:3px;border-radius:2px}.fleet-map footer strong{margin-left:auto;color:#16494c}:host ::ng-deep .bus-line-tooltip{padding:3px 6px;border:0;border-radius:5px;background:#073f44;color:#fff;box-shadow:0 5px 14px #0f172a33;font-size:.68rem;font-weight:900}:host ::ng-deep .leaflet-tooltip-top::before{border-top-color:#073f44}@media(max-width:650px){.fleet-map header{align-items:stretch;flex-direction:column}.fleet-map select{width:100%}.map-canvas{height:420px}.fleet-map footer{flex-wrap:wrap}.fleet-map footer strong{width:100%;margin-left:0}}\n"] }]
    }], () => [], { vehicles: [{ type: i0.Input, args: [{ isSignal: true, alias: "vehicles", required: true }] }], currentBusId: [{ type: i0.Input, args: [{ isSignal: true, alias: "currentBusId", required: false }] }], mapContainer: [{ type: i0.ViewChild, args: ['mapContainer', { isSignal: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FleetMapComponent, { className: "FleetMapComponent", filePath: "src/app/shared/fleet-map/fleet-map.component.ts", lineNumber: 12 }); })();
