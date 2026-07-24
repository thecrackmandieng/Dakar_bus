import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { RealtimeService } from '../../core/realtime.service';
import { FleetService } from '../../core/fleet.service';
import { FleetMapComponent } from '../../shared/fleet-map/fleet-map.component';
import { AlertSoundService } from '../../core/alert-sound.service';
import { AuthService } from '../../core/auth.service';
import * as i0 from "@angular/core";
function ChauffeurPage_Conditional_15_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 11)(1, "header")(2, "div")(3, "p");
    i0.ɵɵtext(4, "V\u00E9hicule affect\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 13)(10, "article")(11, "small");
    i0.ɵɵtext(12, "Immatriculation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "article")(16, "small");
    i0.ɵɵtext(17, "Ligne");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "article")(21, "small");
    i0.ɵɵtext(22, "Capacit\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "article")(26, "small");
    i0.ɵɵtext(27, "Vitesse");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const currentVehicle_r1 = ctx;
    const bus_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Bus ", currentVehicle_r1.busNumber);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("gps-offline", !bus_r2.gps.fiable);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(bus_r2.gps.fiable ? "GPS op\u00E9rationnel" : "GPS indisponible");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(currentVehicle_r1.registration);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", currentVehicle_r1.lineNumber || "Non affect\u00E9e", " \u00B7 ", currentVehicle_r1.lineName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", currentVehicle_r1.capacity, " places");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", currentVehicle_r1.speed, " km/h");
} }
function ChauffeurPage_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 6)(1, "span");
    i0.ɵɵtext(2, "Passagers \u00E0 bord");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵelement(8, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "section", 8)(12, "article", 9)(13, "span");
    i0.ɵɵtext(14, "Entr\u00E9es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18, "Capteur IR A \u2192 B");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "article", 10)(20, "span");
    i0.ɵɵtext(21, "Sorties");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25, "Capteur IR B \u2192 A");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "article")(27, "span");
    i0.ɵɵtext(28, "Dernier passage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "strong");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "small");
    i0.ɵɵtext(32, "D\u00E9tection automatique");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(33, ChauffeurPage_Conditional_15_Conditional_33_Template, 30, 9, "section", 11);
    i0.ɵɵelement(34, "app-fleet-map", 12);
} if (rf & 2) {
    let tmp_10_0;
    const bus_r2 = ctx;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("counter-card ", ctx_r2.loadState().tone));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(bus_r2.passengers.passagers);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("sur ", ctx_r2.capacity(), " places \u00B7 ", ctx_r2.occupancy(), " %");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r2.occupancyProgress(), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.loadState().label);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("+ ", bus_r2.passengers.entrees);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("\u2212 ", bus_r2.passengers.sorties);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(bus_r2.passengers.dernierEvenement || "Aucun");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_10_0 = ctx_r2.vehicle()) ? 33 : -1, tmp_10_0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("vehicles", ctx_r2.fleet.vehicles())("currentBusId", bus_r2.busId);
} }
function ChauffeurPage_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 5);
    i0.ɵɵtext(1, "En attente des premi\u00E8res donn\u00E9es ESP32\u2026");
    i0.ɵɵelementEnd();
} }
export class ChauffeurPage {
    realtime = inject(RealtimeService);
    fleet = inject(FleetService);
    auth = inject(AuthService);
    alertSound = inject(AlertSoundService);
    wasOverloaded = false;
    soundEnabled = this.alertSound.enabled;
    soundButtonLabel = computed(() => this.soundEnabled() ? 'Son activé' : 'Activer le son', ...(ngDevMode ? [{ debugName: "soundButtonLabel" }] : /* istanbul ignore next */ []));
    data = this.realtime.telemetry;
    vehicle = computed(() => {
        const busId = this.data()?.busId;
        return this.fleet.vehicles().find(({ id, busNumber }) => id === busId || busNumber === busId) ?? null;
    }, ...(ngDevMode ? [{ debugName: "vehicle" }] : /* istanbul ignore next */ []));
    capacity = computed(() => this.vehicle()?.capacity ?? this.data()?.capacity ?? 0, ...(ngDevMode ? [{ debugName: "capacity" }] : /* istanbul ignore next */ []));
    occupancy = computed(() => {
        const telemetry = this.data();
        const capacity = this.capacity();
        return telemetry && capacity > 0 ? Math.round(telemetry.passengers.passagers / capacity * 100) : 0;
    }, ...(ngDevMode ? [{ debugName: "occupancy" }] : /* istanbul ignore next */ []));
    occupancyProgress = computed(() => Math.min(this.occupancy(), 100), ...(ngDevMode ? [{ debugName: "occupancyProgress" }] : /* istanbul ignore next */ []));
    loadState = computed(() => {
        const telemetry = this.data();
        const passengers = telemetry?.passengers.passagers ?? 0;
        const capacity = this.capacity();
        return passengers > capacity ? { label: 'BUS SURCHARGÉ', tone: 'danger' } :
            passengers === capacity && capacity > 0 ? { label: 'BUS PLEIN', tone: 'full' } :
                passengers >= capacity * .8 ? { label: 'Presque complet', tone: 'warning' } :
                    { label: 'Capacité normale', tone: 'safe' };
    }, ...(ngDevMode ? [{ debugName: "loadState" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            const telemetry = this.data();
            const overloaded = !!telemetry && telemetry.passengers.passagers > this.capacity();
            if (overloaded && !this.wasOverloaded) {
                this.alertSound.playOverload();
            }
            else if (!overloaded) {
                this.alertSound.stopOverload();
            }
            this.wasOverloaded = overloaded;
        });
    }
    toggleAlertSound() {
        this.alertSound.toggle();
        const telemetry = this.data();
        if (this.alertSound.enabled() && telemetry && telemetry.passengers.passagers > this.capacity()) {
            this.alertSound.playOverload();
        }
    }
    static ɵfac = function ChauffeurPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ChauffeurPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ChauffeurPage, selectors: [["app-chauffeur"]], decls: 17, vars: 7, consts: [[1, "driver-head"], [1, "driver-actions"], [1, "connection"], ["type", "button", 1, "sound-button", 3, "click"], ["type", "button", 1, "logout-button", 3, "click"], [1, "waiting"], ["aria-live", "polite"], [1, "capacity"], [1, "movement-grid"], [1, "entry"], [1, "exit"], [1, "vehicle-info"], [3, "vehicles", "currentBusId"], [1, "vehicle-details"]], template: function ChauffeurPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div")(2, "p");
            i0.ɵɵtext(3, "Poste chauffeur");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Mon bus en temps r\u00E9el");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7, "Comptage IR et position GPS du v\u00E9hicule");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 1)(9, "span", 2);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 3);
            i0.ɵɵlistener("click", function ChauffeurPage_Template_button_click_11_listener() { return ctx.toggleAlertSound(); });
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 4);
            i0.ɵɵlistener("click", function ChauffeurPage_Template_button_click_13_listener() { return ctx.auth.logout(); });
            i0.ɵɵtext(14, "D\u00E9connexion");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(15, ChauffeurPage_Conditional_15_Template, 35, 15)(16, ChauffeurPage_Conditional_16_Template, 2, 0, "section", 5);
        } if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵadvance(9);
            i0.ɵɵclassProp("offline", !ctx.realtime.connected());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.realtime.connected() ? "Capteurs connect\u00E9s" : "Connexion capteurs\u2026");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.soundEnabled());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.soundButtonLabel());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_4_0 = ctx.data()) ? 15 : 16, tmp_4_0);
        } }, dependencies: [FleetMapComponent], styles: [".driver-head[_ngcontent-%COMP%], .counter-card[_ngcontent-%COMP%], .movement-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .driver-map[_ngcontent-%COMP%], .waiting[_ngcontent-%COMP%]{border:1px solid #dce7e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a12}.driver-head[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:24px;margin-bottom:18px}.driver-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .driver-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .driver-map[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .driver-map[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.driver-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .driver-map[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0f8f86;font-weight:900;text-transform:uppercase;font-size:.75rem}.driver-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .driver-map[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#64748b}.connection[_ngcontent-%COMP%]{padding:9px 14px;border-radius:99px;background:#dcfce7!important;color:#166534!important;font-weight:800}.connection.offline[_ngcontent-%COMP%]{background:#fee2e2!important;color:#991b1b!important}.counter-card[_ngcontent-%COMP%]{text-align:center;padding:34px;border-top:8px solid #10b981}.counter-card[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#64748b;font-weight:800}.counter-card[_ngcontent-%COMP%] > strong[_ngcontent-%COMP%]{display:block;font-size:clamp(5rem,14vw,9rem);line-height:1}.counter-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#64748b}.counter-card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block;margin-top:20px;font-size:1.2rem;color:#047857}.counter-card.warning[_ngcontent-%COMP%]{border-color:#f59e0b}.counter-card.warning[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#b45309}.counter-card.danger[_ngcontent-%COMP%]{border-color:#ef4444;animation:_ngcontent-%COMP%_pulse 1.4s infinite}.counter-card.danger[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#dc2626}.capacity[_ngcontent-%COMP%]{max-width:620px;height:14px;margin:24px auto 0;border-radius:99px;background:#e2e8f0;overflow:hidden}.capacity[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;height:100%;background:#10b981}.warning[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#f59e0b}.danger[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#ef4444}.movement-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:18px 0}.movement-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding:22px}.movement-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .movement-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .movement-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}.movement-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .movement-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#64748b}.movement-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:2rem;margin:8px 0}.entry[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#059669}.exit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#dc2626}.driver-map[_ngcontent-%COMP%]{overflow:hidden}.driver-map[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:20px}.driver-map[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{display:block;width:100%;height:400px;border:0}.waiting[_ngcontent-%COMP%]{padding:60px;text-align:center}@keyframes _ngcontent-%COMP%_pulse{50%{box-shadow:0 0 0 8px #ef444422}}@media(max-width:760px){.driver-head[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column;gap:16px}.movement-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}", ".driver-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.driver-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:38px}.driver-actions[_ngcontent-%COMP%]   .sound-button[_ngcontent-%COMP%]{background:#f1f5f5;color:#49696c}.driver-actions[_ngcontent-%COMP%]   .sound-button.active[_ngcontent-%COMP%]{background:#d9f6f2;color:#08776f}.driver-actions[_ngcontent-%COMP%]   .logout-button[_ngcontent-%COMP%]{background:#fee2e2;color:#b91c1c}@media(max-width:760px){.driver-actions[_ngcontent-%COMP%]{width:100%;flex-wrap:wrap}.driver-actions[_ngcontent-%COMP%]   .connection[_ngcontent-%COMP%]{margin-right:auto}}\n\n.counter-card.full[_ngcontent-%COMP%]{border-color:#f59e0b;background:linear-gradient(180deg,#fffbeb,#fff)}\n.counter-card.full[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#b45309}\n.counter-card.full[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:#f59e0b}\n.vehicle-info[_ngcontent-%COMP%]{margin:18px 0;padding:20px;border:1px solid #dce7e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a12}.vehicle-info[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:16px}.vehicle-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .vehicle-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.vehicle-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0f8f86;font-size:.72rem;font-weight:900;text-transform:uppercase}.vehicle-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:4px}.vehicle-info[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{padding:7px 10px;border-radius:99px;background:#dcfce7;color:#166534;font-size:.72rem;font-weight:850}.vehicle-info[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] > span.gps-offline[_ngcontent-%COMP%]{background:#fee2e2;color:#991b1b}.vehicle-details[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.vehicle-details[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding:13px;border:1px solid #e5eeee;border-radius:11px;background:#f8fbfb}.vehicle-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .vehicle-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}.vehicle-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#718789;font-size:.7rem}.vehicle-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{margin-top:5px;color:#153f43;font-size:.88rem}@media(max-width:800px){.vehicle-details[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(max-width:450px){.vehicle-details[_ngcontent-%COMP%]{grid-template-columns:1fr}.vehicle-info[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ChauffeurPage, [{
        type: Component,
        args: [{ selector: 'app-chauffeur', standalone: true, imports: [FleetMapComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"driver-head\">\n  <div><p>Poste chauffeur</p><h1>Mon bus en temps r\u00E9el</h1><span>Comptage IR et position GPS du v\u00E9hicule</span></div>\n  <div class=\"driver-actions\"><span class=\"connection\" [class.offline]=\"!realtime.connected()\">{{ realtime.connected() ? 'Capteurs connect\u00E9s' : 'Connexion capteurs\u2026' }}</span><button type=\"button\" class=\"sound-button\" [class.active]=\"soundEnabled()\" (click)=\"toggleAlertSound()\">{{ soundButtonLabel() }}</button><button type=\"button\" class=\"logout-button\" (click)=\"auth.logout()\">D\u00E9connexion</button></div>\n</section>\n\n@if (data(); as bus) {\n  <section class=\"counter-card {{ loadState().tone }}\" aria-live=\"polite\">\n    <span>Passagers \u00E0 bord</span>\n    <strong>{{ bus.passengers.passagers }}</strong>\n    <small>sur {{ capacity() }} places \u00B7 {{ occupancy() }} %</small>\n    <div class=\"capacity\"><i [style.width.%]=\"occupancyProgress()\"></i></div>\n    <b>{{ loadState().label }}</b>\n  </section>\n\n  <section class=\"movement-grid\">\n    <article class=\"entry\"><span>Entr\u00E9es</span><strong>+ {{ bus.passengers.entrees }}</strong><small>Capteur IR A \u2192 B</small></article>\n    <article class=\"exit\"><span>Sorties</span><strong>\u2212 {{ bus.passengers.sorties }}</strong><small>Capteur IR B \u2192 A</small></article>\n    <article><span>Dernier passage</span><strong>{{ bus.passengers.dernierEvenement || 'Aucun' }}</strong><small>D\u00E9tection automatique</small></article>\n  </section>\n\n  @if (vehicle(); as currentVehicle) {\n    <section class=\"vehicle-info\">\n      <header><div><p>V\u00E9hicule affect\u00E9</p><h2>Bus {{ currentVehicle.busNumber }}</h2></div><span [class.gps-offline]=\"!bus.gps.fiable\">{{ bus.gps.fiable ? 'GPS op\u00E9rationnel' : 'GPS indisponible' }}</span></header>\n      <div class=\"vehicle-details\">\n        <article><small>Immatriculation</small><strong>{{ currentVehicle.registration }}</strong></article>\n        <article><small>Ligne</small><strong>{{ currentVehicle.lineNumber || 'Non affect\u00E9e' }} \u00B7 {{ currentVehicle.lineName }}</strong></article>\n        <article><small>Capacit\u00E9</small><strong>{{ currentVehicle.capacity }} places</strong></article>\n        <article><small>Vitesse</small><strong>{{ currentVehicle.speed }} km/h</strong></article>\n      </div>\n    </section>\n  }\n\n  <app-fleet-map [vehicles]=\"fleet.vehicles()\" [currentBusId]=\"bus.busId\" />\n} @else {\n  <section class=\"waiting\">En attente des premi\u00E8res donn\u00E9es ESP32\u2026</section>\n}\n", styles: [".driver-head,.counter-card,.movement-grid article,.driver-map,.waiting{border:1px solid #dce7e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a12}.driver-head{display:flex;justify-content:space-between;align-items:center;padding:24px;margin-bottom:18px}.driver-head p,.driver-head h1,.driver-map p,.driver-map h2{margin:0}.driver-head p,.driver-map p{color:#0f8f86;font-weight:900;text-transform:uppercase;font-size:.75rem}.driver-head span,.driver-map span{color:#64748b}.connection{padding:9px 14px;border-radius:99px;background:#dcfce7!important;color:#166534!important;font-weight:800}.connection.offline{background:#fee2e2!important;color:#991b1b!important}.counter-card{text-align:center;padding:34px;border-top:8px solid #10b981}.counter-card>span{color:#64748b;font-weight:800}.counter-card>strong{display:block;font-size:clamp(5rem,14vw,9rem);line-height:1}.counter-card small{color:#64748b}.counter-card b{display:block;margin-top:20px;font-size:1.2rem;color:#047857}.counter-card.warning{border-color:#f59e0b}.counter-card.warning b{color:#b45309}.counter-card.danger{border-color:#ef4444;animation:pulse 1.4s infinite}.counter-card.danger b{color:#dc2626}.capacity{max-width:620px;height:14px;margin:24px auto 0;border-radius:99px;background:#e2e8f0;overflow:hidden}.capacity i{display:block;height:100%;background:#10b981}.warning .capacity i{background:#f59e0b}.danger .capacity i{background:#ef4444}.movement-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:18px 0}.movement-grid article{padding:22px}.movement-grid span,.movement-grid small,.movement-grid strong{display:block}.movement-grid span,.movement-grid small{color:#64748b}.movement-grid strong{font-size:2rem;margin:8px 0}.entry strong{color:#059669}.exit strong{color:#dc2626}.driver-map{overflow:hidden}.driver-map>div{padding:20px}.driver-map iframe{display:block;width:100%;height:400px;border:0}.waiting{padding:60px;text-align:center}@keyframes pulse{50%{box-shadow:0 0 0 8px #ef444422}}@media(max-width:760px){.driver-head{align-items:flex-start;flex-direction:column;gap:16px}.movement-grid{grid-template-columns:1fr}}\n", ".driver-actions{display:flex;align-items:center;gap:10px}.driver-actions button{min-height:38px}.driver-actions .sound-button{background:#f1f5f5;color:#49696c}.driver-actions .sound-button.active{background:#d9f6f2;color:#08776f}.driver-actions .logout-button{background:#fee2e2;color:#b91c1c}@media(max-width:760px){.driver-actions{width:100%;flex-wrap:wrap}.driver-actions .connection{margin-right:auto}}\n\n.counter-card.full{border-color:#f59e0b;background:linear-gradient(180deg,#fffbeb,#fff)}\n.counter-card.full b{color:#b45309}\n.counter-card.full .capacity i{background:#f59e0b}\n.vehicle-info{margin:18px 0;padding:20px;border:1px solid #dce7e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a12}.vehicle-info header{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:16px}.vehicle-info p,.vehicle-info h2{margin:0}.vehicle-info p{color:#0f8f86;font-size:.72rem;font-weight:900;text-transform:uppercase}.vehicle-info h2{margin-top:4px}.vehicle-info header>span{padding:7px 10px;border-radius:99px;background:#dcfce7;color:#166534;font-size:.72rem;font-weight:850}.vehicle-info header>span.gps-offline{background:#fee2e2;color:#991b1b}.vehicle-details{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.vehicle-details article{padding:13px;border:1px solid #e5eeee;border-radius:11px;background:#f8fbfb}.vehicle-details small,.vehicle-details strong{display:block}.vehicle-details small{color:#718789;font-size:.7rem}.vehicle-details strong{margin-top:5px;color:#153f43;font-size:.88rem}@media(max-width:800px){.vehicle-details{grid-template-columns:repeat(2,1fr)}}@media(max-width:450px){.vehicle-details{grid-template-columns:1fr}.vehicle-info header{align-items:flex-start;flex-direction:column}}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ChauffeurPage, { className: "ChauffeurPage", filePath: "src/app/pages/chauffeur/chauffeur.page.ts", lineNumber: 16 }); })();
