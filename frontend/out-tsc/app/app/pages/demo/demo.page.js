import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FleetService } from '../../core/fleet.service';
import { FleetMapComponent } from '../../shared/fleet-map/fleet-map.component';
import { AlertSoundService } from '../../core/alert-sound.service';
import * as i0 from "@angular/core";
import * as i1 from "../../core/realtime.service";
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
function DemoPage_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article");
    i0.ɵɵelement(1, "div", 23);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("stat-card tone-", stat_r1.tone));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(stat_r1.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(stat_r1.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(stat_r1.trend);
} }
function DemoPage_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("counter-message ", ctx_r1.counterMessageTone()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.counterMessage());
} }
function DemoPage_For_36_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "div", 25)(2, "span", 26);
    i0.ɵɵelement(3, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6, "V\u00E9hicule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h3");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "b");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 27)(14, "span");
    i0.ɵɵtext(15, "Ligne");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 28)(19, "div")(20, "span");
    i0.ɵɵtext(21, "Occupation actuelle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "b");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 29);
    i0.ɵɵelement(29, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 30);
    i0.ɵɵlistener("click", function DemoPage_For_36_Template_button_click_30_listener() { const vehicle_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetCounter(vehicle_r4.id)); });
    i0.ɵɵelementStart(31, "i", 31);
    i0.ɵɵtext(32, "\u21BB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span");
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const vehicle_r4 = ctx.$implicit;
    i0.ɵɵclassMap(i0.ɵɵinterpolate1("counter-bus-card ", vehicle_r4.status.tone));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(vehicle_r4.busNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(vehicle_r4.registration);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(vehicle_r4.status.label);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(vehicle_r4.lineLabel);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(vehicle_r4.passengers);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("/ ", vehicle_r4.capacity);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", vehicle_r4.percentage, " %");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", vehicle_r4.gaugeWidth, "%");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", vehicle_r4.resetDisabled);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(vehicle_r4.resetLabel);
} }
function DemoPage_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtext(1, "Aucun compteur ne correspond \u00E0 la recherche.");
    i0.ɵɵelementEnd();
} }
function DemoPage_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "footer", 14)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "button", 32);
    i0.ɵɵlistener("click", function DemoPage_Conditional_38_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.previousCounterPage()); });
    i0.ɵɵtext(5, "\u2190");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "b");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 32);
    i0.ɵɵlistener("click", function DemoPage_Conditional_38_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nextCounterPage()); });
    i0.ɵɵtext(9, "\u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.filteredCounterCards().length, " bus");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.counterPage() === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("Page ", ctx_r1.counterPage(), " / ", ctx_r1.counterTotalPages());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.counterPage() === ctx_r1.counterTotalPages());
} }
function DemoPage_For_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.detail);
} }
function DemoPage_For_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 21);
    i0.ɵɵelement(1, "span", 31);
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "em");
    i0.ɵɵtext(8, "\u00C0 l'instant");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const vehicle_r7 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Surcharge d\u00E9tect\u00E9e \u00B7 Bus ", vehicle_r7.busNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("Ligne ", vehicle_r7.lineNumber, " \u00B7 ", vehicle_r7.passengers, "/", vehicle_r7.capacity, " passagers");
} }
function DemoPage_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1, "Aucune surcharge d\u00E9tect\u00E9e.");
    i0.ɵɵelementEnd();
} }
export class DemoPage {
    realtime;
    fleet = inject(FleetService);
    alertSound = inject(AlertSoundService);
    soundEnabled = this.alertSound.enabled;
    overloadAlerts = computed(() => this.fleet.vehicles().filter(({ passengers, capacity }) => passengers > capacity), ...(ngDevMode ? [{ debugName: "overloadAlerts" }] : /* istanbul ignore next */ []));
    resettingBusId = signal(null, ...(ngDevMode ? [{ debugName: "resettingBusId" }] : /* istanbul ignore next */ []));
    counterMessage = signal('', ...(ngDevMode ? [{ debugName: "counterMessage" }] : /* istanbul ignore next */ []));
    counterMessageTone = signal('success', ...(ngDevMode ? [{ debugName: "counterMessageTone" }] : /* istanbul ignore next */ []));
    counterSearch = signal('', ...(ngDevMode ? [{ debugName: "counterSearch" }] : /* istanbul ignore next */ []));
    counterPage = signal(1, ...(ngDevMode ? [{ debugName: "counterPage" }] : /* istanbul ignore next */ []));
    counterPageSize = 6;
    counterCards = computed(() => {
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
    }, ...(ngDevMode ? [{ debugName: "counterCards" }] : /* istanbul ignore next */ []));
    filteredCounterCards = computed(() => {
        const search = this.counterSearch().trim().toLocaleLowerCase('fr');
        return search ? this.counterCards().filter(({ busNumber, registration, lineLabel }) => `${busNumber} ${registration} ${lineLabel}`.toLocaleLowerCase('fr').includes(search)) : this.counterCards();
    }, ...(ngDevMode ? [{ debugName: "filteredCounterCards" }] : /* istanbul ignore next */ []));
    counterTotalPages = computed(() => Math.max(1, Math.ceil(this.filteredCounterCards().length / this.counterPageSize)), ...(ngDevMode ? [{ debugName: "counterTotalPages" }] : /* istanbul ignore next */ []));
    visibleCounterCards = computed(() => {
        const validPage = Math.min(this.counterPage(), this.counterTotalPages());
        const start = (validPage - 1) * this.counterPageSize;
        return this.filteredCounterCards().slice(start, start + this.counterPageSize);
    }, ...(ngDevMode ? [{ debugName: "visibleCounterCards" }] : /* istanbul ignore next */ []));
    previousOverloadedIds = new Set();
    stats = computed(() => {
        const live = this.realtime.telemetry();
        const vehicles = this.fleet.vehicles();
        const passengerCount = vehicles.reduce((total, { passengers }) => total + passengers, 0);
        return [
            { label: 'Bus avec GPS', value: String(vehicles.length), trend: 'Flotte en direct', tone: 'green' },
            { label: 'Entrées IR', value: String(live?.passengers.entrees ?? 0), trend: "Aujourd’hui", tone: 'blue' },
            { label: 'Passagers à bord', value: String(passengerCount), trend: 'Toute la flotte', tone: 'violet' },
            { label: 'Bus en surcharge', value: String(vehicles.filter(({ passengers, capacity }) => passengers > capacity).length), trend: 'Seuil capacité', tone: 'red' }
        ];
    }, ...(ngDevMode ? [{ debugName: "stats" }] : /* istanbul ignore next */ []));
    operations = computed(() => {
        const vehicles = this.fleet.vehicles();
        const totalCapacity = vehicles.reduce((total, { capacity }) => total + capacity, 0);
        const passengers = vehicles.reduce((total, vehicle) => total + vehicle.passengers, 0);
        const averageOccupancy = totalCapacity ? Math.round(passengers / totalCapacity * 100) : 0;
        return [
            { label: 'Occupation moyenne', value: `${averageOccupancy}%`, detail: `${passengers} passagers sur ${totalCapacity} places` },
            { label: 'Positions GPS actives', value: String(vehicles.length), detail: 'Coordonnées valides reçues' },
            { label: 'Capacité totale suivie', value: String(totalCapacity), detail: 'Places disponibles sur la flotte' }
        ];
    }, ...(ngDevMode ? [{ debugName: "operations" }] : /* istanbul ignore next */ []));
    constructor(realtime) {
        this.realtime = realtime;
        effect(() => {
            const overloaded = this.fleet.vehicles().filter(({ passengers, capacity }) => passengers > capacity);
            const currentIds = new Set(overloaded.map(({ id }) => id));
            const hasNewAlert = overloaded.some(({ id }) => !this.previousOverloadedIds.has(id));
            this.previousOverloadedIds = currentIds;
            if (hasNewAlert) {
                this.alertSound.playOverload();
            }
            else if (overloaded.length === 0) {
                this.alertSound.stopOverload();
            }
        });
    }
    toggleAlertSound() {
        this.alertSound.toggle();
        if (this.alertSound.enabled() && this.overloadAlerts().length > 0) {
            this.alertSound.playOverload();
        }
    }
    searchCounters(event) {
        this.counterSearch.set(event.target.value);
        this.counterPage.set(1);
    }
    previousCounterPage() {
        this.counterPage.update((page) => Math.max(1, page - 1));
    }
    nextCounterPage() {
        this.counterPage.update((page) => Math.min(this.counterTotalPages(), page + 1));
    }
    async resetCounter(busId) {
        this.resettingBusId.set(busId);
        this.counterMessage.set('');
        try {
            await this.realtime.resetPassengerCounter(busId);
            const busNumber = this.counterCards().find(({ id }) => id === busId)?.busNumber ?? busId;
            this.counterMessageTone.set('success');
            this.counterMessage.set(`Le compteur du bus ${busNumber} a été initialisé.`);
        }
        catch (error) {
            this.counterMessageTone.set('error');
            this.counterMessage.set(error instanceof Error ? error.message : 'Initialisation impossible.');
        }
        finally {
            this.resettingBusId.set(null);
        }
    }
    static ɵfac = function DemoPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DemoPage)(i0.ɵɵdirectiveInject(i1.RealtimeService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DemoPage, selectors: [["app-demo"]], decls: 57, vars: 7, consts: [[1, "dashboard-hero"], ["aria-label", "Actions rapides", 1, "hero-actions"], ["type", "button", 1, "ghost", 3, "click"], ["type", "button"], ["aria-label", "Statistiques de la plateforme", 1, "stats-grid"], [3, "class"], [1, "counter-admin"], [1, "counter-head"], [1, "counter-tools"], ["type", "search", "placeholder", "Bus, ligne, immatriculation", 3, "input", "value"], [1, "counter-live"], ["role", "status", 3, "class"], [1, "counter-bus-grid"], [1, "counter-empty"], [1, "counter-pagination"], [1, "dashboard-grid"], [3, "vehicles"], [1, "ops-panel"], [1, "panel-head"], [1, "ops-list"], [1, "alert-feed"], [1, "live-overload"], [1, "no-alert"], ["aria-hidden", "true", 1, "stat-icon"], ["role", "status"], [1, "counter-card-top"], ["aria-hidden", "true", 1, "bus-symbol"], [1, "counter-line"], [1, "occupancy-row"], ["aria-hidden", "true", 1, "counter-gauge"], ["type", "button", 1, "reset-button", 3, "click", "disabled"], ["aria-hidden", "true"], ["type", "button", 1, "secondary", 3, "click", "disabled"]], template: function DemoPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div")(2, "p");
            i0.ɵɵtext(3, "Centre de controle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Dashboard Dakar Bus");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7, "Suivi temps reel du reseau, statistiques de performance et supervision des operations.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "div", 1)(9, "button", 2);
            i0.ɵɵlistener("click", function DemoPage_Template_button_click_9_listener() { return ctx.toggleAlertSound(); });
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 3);
            i0.ɵɵtext(12, "Nouvelle alerte");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "section", 4);
            i0.ɵɵrepeaterCreate(14, DemoPage_For_15_Template, 8, 6, "article", 5, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "section", 6)(17, "header", 7)(18, "div")(19, "p");
            i0.ɵɵtext(20, "Capteurs infrarouges");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "h2");
            i0.ɵɵtext(22, "Compteurs passagers");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24, "Consultez l\u2019occupation et initialisez le compteur du v\u00E9hicule connect\u00E9.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 8)(26, "label")(27, "span");
            i0.ɵɵtext(28, "Rechercher");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "input", 9);
            i0.ɵɵlistener("input", function DemoPage_Template_input_input_29_listener($event) { return ctx.searchCounters($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "span", 10);
            i0.ɵɵelement(31, "i");
            i0.ɵɵtext(32, "Temps r\u00E9el");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(33, DemoPage_Conditional_33_Template, 2, 4, "p", 11);
            i0.ɵɵelementStart(34, "div", 12);
            i0.ɵɵrepeaterCreate(35, DemoPage_For_36_Template, 35, 14, "article", 5, _forTrack1);
            i0.ɵɵconditionalCreate(37, DemoPage_Conditional_37_Template, 2, 0, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(38, DemoPage_Conditional_38_Template, 10, 5, "footer", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "section", 15);
            i0.ɵɵelement(40, "app-fleet-map", 16);
            i0.ɵɵelementStart(41, "aside", 17)(42, "div", 18)(43, "div")(44, "p");
            i0.ɵɵtext(45, "Operations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "h2");
            i0.ɵɵtext(47, "Etat plateforme");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(48, "div", 19);
            i0.ɵɵrepeaterCreate(49, DemoPage_For_50_Template, 7, 3, "article", null, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div", 20)(52, "h3");
            i0.ɵɵtext(53, "Alertes recentes");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(54, DemoPage_For_55_Template, 9, 4, "article", 21, _forTrack1);
            i0.ɵɵconditionalCreate(56, DemoPage_Conditional_56_Template, 2, 0, "div", 22);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.soundEnabled() ? "Son activ\u00E9" : "Activer le son");
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.stats());
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("value", ctx.counterSearch());
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.counterMessage() ? 33 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.visibleCounterCards());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.visibleCounterCards().length ? 37 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.filteredCounterCards().length > ctx.counterPageSize ? 38 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("vehicles", ctx.fleet.vehicles());
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(ctx.operations());
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.overloadAlerts());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.overloadAlerts().length ? 56 : -1);
        } }, dependencies: [FleetMapComponent], styles: [".dashboard-hero[_ngcontent-%COMP%], \n.stat-card[_ngcontent-%COMP%], \n.map-card[_ngcontent-%COMP%], \n.ops-panel[_ngcontent-%COMP%], \n.module-section[_ngcontent-%COMP%], \n.counter-admin[_ngcontent-%COMP%] {\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.94);\n  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.08);\n}\n\n.counter-admin[_ngcontent-%COMP%]{margin-bottom:18px;padding:18px}.counter-bus-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px}.counter-bus-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:12px;border:1px solid #e2eceb;border-radius:12px;background:#f8fbfb}.counter-bus-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{padding:7px 9px;border-radius:8px;background:#dff7f4;color:#08776f;font-size:.72rem;font-weight:900}.counter-bus-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .counter-bus-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block}.counter-bus-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:3px;color:#64748b}.counter-bus-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:36px}.counter-message[_ngcontent-%COMP%]{padding:10px 12px;border-radius:9px;background:#e8faf8;color:#08776f;font-size:.8rem;font-weight:800}\n\n.dashboard-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 18px;\n  padding: 26px;\n  background:\n    linear-gradient(135deg, rgba(15, 118, 110, 0.1), rgba(37, 99, 235, 0.06)),\n    #ffffff;\n}\n\n.dashboard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.dashboard-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.panel-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.alert-feed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.dashboard-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.panel-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 0.76rem;\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.dashboard-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: clamp(1.9rem, 4vw, 3rem);\n  line-height: 1.02;\n}\n\n.dashboard-hero[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%], \n.bus-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.ops-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.alert-feed[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.screen-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--muted);\n}\n\n.dashboard-hero[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 720px;\n  margin-top: 9px;\n  font-weight: 700;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 156px;\n  padding: 18px;\n}\n\n.stat-card[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: auto 14px 14px auto;\n  width: 72px;\n  height: 72px;\n  border-radius: 999px;\n  background: currentColor;\n  opacity: 0.08;\n  content: \"\";\n}\n\n.stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.stat-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--muted);\n  font-weight: 800;\n}\n\n.stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 18px;\n  color: var(--text);\n  font-size: 2rem;\n  line-height: 1;\n}\n\n.stat-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  margin-bottom: 16px;\n  border-radius: 8px;\n  background: currentColor;\n}\n\n.stat-icon[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 10px;\n  border: 2px solid #ffffff;\n  border-radius: 4px;\n  content: \"\";\n}\n\n.tone-green[_ngcontent-%COMP%] { color: #0f766e; }\n.tone-blue[_ngcontent-%COMP%] { color: #2563eb; }\n.tone-violet[_ngcontent-%COMP%] { color: #7c3aed; }\n.tone-red[_ngcontent-%COMP%] { color: #dc2626; }\n\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(320px, 0.75fr);\n  gap: 18px;\n  margin-bottom: 18px;\n}\n\n.ops-panel[_ngcontent-%COMP%], \n.module-section[_ngcontent-%COMP%] {\n  padding: 18px;\n}\n\n.map-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 720px;\n  overflow: hidden;\n  flex-direction: column;\n  padding: 0;\n}\n\n.map-card[_ngcontent-%COMP%]    > .panel-head[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding: 18px 18px 14px;\n}\n\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n\n.panel-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 1.25rem;\n}\n\n.live-badge[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 7px 10px 7px 24px;\n  border-radius: 999px;\n  background: #dcfce7;\n  color: #166534;\n  font-size: 0.78rem;\n  font-weight: 900;\n}\n\n.live-badge[_ngcontent-%COMP%]::before {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: #16a34a;\n  box-shadow: 0 0 0 5px rgba(22, 163, 74, 0.14);\n  transform: translateY(-50%);\n  content: \"\";\n}\n\n.map-viewport[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  flex: 1 1 auto;\n  width: 100%;\n  min-height: 560px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 0;\n  background: #e2e8f0;\n}\n\n.google-map[_ngcontent-%COMP%] {\n  position: absolute !important;\n  inset: 0 !important;\n  z-index: 1;\n  display: block !important;\n  width: 100% !important;\n  min-width: 100% !important;\n  max-width: none !important;\n  height: 100% !important;\n  min-height: 100% !important;\n  border: 0 !important;\n}\n\n.map-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 14px;\n  top: 14px;\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border: 1px solid rgba(148, 163, 184, 0.25);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.88);\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);\n  backdrop-filter: blur(10px);\n  color: #334155;\n  font-size: 0.78rem;\n  font-weight: 900;\n}\n\n.map-overlay[_ngcontent-%COMP%]::before {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: #16a34a;\n  box-shadow: 0 0 0 5px rgba(22, 163, 74, 0.13);\n  content: \"\";\n}\n\n.bus-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 501;\n  display: grid;\n  width: 58px;\n  height: 38px;\n  min-height: 0;\n  padding: 0;\n  place-items: center;\n  border: 3px solid #ffffff;\n  border-radius: 8px;\n  background: var(--primary);\n  color: #ffffff;\n  box-shadow: 0 14px 28px rgba(15, 118, 110, 0.24);\n  transform: translate(-50%, -50%);\n}\n\n.bus-marker[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 8px 10px auto;\n  height: 7px;\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.32);\n  content: \"\";\n}\n\n.bus-marker[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-top: 10px;\n  font-size: 0.72rem;\n  font-weight: 900;\n}\n\n.bus-marker.warning[_ngcontent-%COMP%] {\n  background: #dc2626;\n  box-shadow: 0 14px 28px rgba(220, 38, 38, 0.22);\n}\n\n.bus-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  padding: 12px 18px 18px;\n  border-top: 1px solid #edf2f7;\n  background: #ffffff;\n}\n\n.bus-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) 88px;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border: 1px solid #edf2f7;\n  border-radius: 8px;\n  background: #f8fafc;\n}\n\n.bus-row[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 34px;\n  place-items: center;\n  border-radius: 8px;\n  background: #e0f2fe;\n  color: #075985;\n  font-weight: 900;\n}\n\n.bus-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.bus-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\nmeter[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 10px;\n}\n\n.ops-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n\n.ops-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 14px;\n  border: 1px solid #edf2f7;\n  border-radius: 8px;\n  background: #f8fafc;\n}\n\n.ops-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.ops-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.ops-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.ops-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-weight: 800;\n}\n\n.ops-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 1.7rem;\n}\n\n.alert-feed[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n\n.alert-feed[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.alert-feed[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 10px;\n  margin-top: 12px;\n  padding: 12px;\n  border-radius: 8px;\n  background: #fff7ed;\n}\n\n.alert-feed[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  margin-top: 6px;\n  border-radius: 999px;\n  background: #f97316;\n}\n\n.alert-feed[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.alert-feed[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.alert-feed[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.alert-feed[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #c2410c;\n  font-size: 0.78rem;\n  font-style: normal;\n  font-weight: 800;\n}\n\n.screen-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n@media (max-width: 1120px) {\n  .stats-grid[_ngcontent-%COMP%], \n   .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .map-card[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n}\n\n@media (max-width: 760px) {\n  .dashboard-hero[_ngcontent-%COMP%], \n   .hero-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .stats-grid[_ngcontent-%COMP%], \n   .dashboard-grid[_ngcontent-%COMP%], \n   .bus-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .map-viewport[_ngcontent-%COMP%] {\n    min-height: 420px;\n  }\n\n  .bus-row[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n\n  meter[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    width: 100%;\n  }\n}", ".counter-admin[_ngcontent-%COMP%]{margin-bottom:20px!important;padding:0!important;overflow:hidden!important;border-radius:18px!important}.counter-head[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:22px 24px;border-bottom:1px solid #e5eeee;background:linear-gradient(135deg,#f0fbf9,#fff)}.counter-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .counter-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}.counter-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#07877f;font-size:.7rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.counter-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:5px;color:#123f43;font-size:1.35rem}.counter-head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:block;margin-top:6px;color:#718789;font-size:.82rem}.counter-live[_ngcontent-%COMP%]{display:flex!important;align-items:center;gap:8px;padding:8px 11px;border-radius:99px;background:#dcfce7;color:#166534!important;font-size:.7rem!important;font-weight:850;white-space:nowrap}.counter-live[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#16a34a;box-shadow:0 0 0 5px #16a34a1c}.counter-message[_ngcontent-%COMP%]{margin:16px 20px 0!important;padding:11px 13px!important;border-radius:10px!important;font-size:.78rem!important}.counter-message.success[_ngcontent-%COMP%]{border:1px solid #bbf7d0;background:#f0fdf4!important;color:#166534!important}.counter-message.error[_ngcontent-%COMP%]{border:1px solid #fecaca;background:#fff1f2!important;color:#991b1b!important}.counter-bus-grid[_ngcontent-%COMP%]{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(290px,1fr))!important;gap:14px!important;padding:20px!important}.counter-bus-card[_ngcontent-%COMP%]{display:flex!important;min-width:0;overflow:hidden;flex-direction:column;gap:16px!important;padding:18px!important;border:1px solid #dfeae9!important;border-top:4px solid #10b981!important;border-radius:14px!important;background:#fff!important;box-shadow:0 10px 30px #0f172a0a}.counter-bus-card.full[_ngcontent-%COMP%]{border-top-color:#f59e0b!important}.counter-bus-card.danger[_ngcontent-%COMP%]{border-top-color:#ef4444!important}.counter-card-top[_ngcontent-%COMP%]{display:grid!important;grid-template-columns:auto minmax(0,1fr) auto!important;align-items:center!important;gap:11px!important}.bus-symbol[_ngcontent-%COMP%]{position:relative;display:grid!important;width:43px;height:43px;place-items:center;border-radius:11px!important;background:#dff7f4!important}.bus-symbol[_ngcontent-%COMP%]::before{width:21px;height:17px;border:2px solid #087d76;border-radius:4px;content:\"\"}.bus-symbol[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:absolute;bottom:9px;width:4px;height:4px;border-radius:50%;background:#087d76;box-shadow:13px 0 #087d76}.counter-card-top[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .counter-card-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .counter-card-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin:0}.counter-card-top[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#94a3b8;font-size:.62rem;font-weight:800;text-transform:uppercase}.counter-card-top[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:2px 0;color:#133f43;font-size:1.05rem}.counter-card-top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#718789;font-size:.7rem}.counter-card-top[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{padding:6px 9px;border-radius:99px;background:#dcfce7;color:#166534;font-size:.64rem}.full[_ngcontent-%COMP%]   .counter-card-top[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{background:#fef3c7;color:#92400e}.danger[_ngcontent-%COMP%]   .counter-card-top[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{background:#fee2e2;color:#991b1b}.counter-line[_ngcontent-%COMP%]{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;padding:10px 11px!important;border-radius:9px!important;background:#f7faf9!important}.counter-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#789093!important;font-size:.68rem!important}.counter-line[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{min-width:0;overflow:hidden;color:#245256!important;font-size:.72rem!important;text-align:right;text-overflow:ellipsis;white-space:nowrap}.occupancy-row[_ngcontent-%COMP%]{display:flex!important;align-items:end!important;justify-content:space-between!important}.occupancy-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;color:#718789;font-size:.7rem}.occupancy-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-top:3px;color:#113f43;font-size:2rem;line-height:1}.occupancy-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-left:3px;color:#94a3b8;font-size:.75rem}.occupancy-row[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{color:#087d76;font-size:.82rem}.full[_ngcontent-%COMP%]   .occupancy-row[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{color:#b45309}.danger[_ngcontent-%COMP%]   .occupancy-row[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]{color:#dc2626}.counter-gauge[_ngcontent-%COMP%]{height:9px!important;overflow:hidden;border-radius:99px!important;background:#e7efee!important}.counter-gauge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,#10b981,#34d399);transition:width .3s ease}.full[_ngcontent-%COMP%]   .counter-gauge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:linear-gradient(90deg,#f59e0b,#fbbf24)}.danger[_ngcontent-%COMP%]   .counter-gauge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background:linear-gradient(90deg,#ef4444,#f87171)}.reset-button[_ngcontent-%COMP%]{display:flex!important;width:100%;min-height:42px!important;align-items:center;justify-content:center;gap:8px;border:1px solid #bce5e1!important;background:#eaf9f7!important;color:#08776f!important;box-shadow:none!important}.reset-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1rem;font-style:normal}.reset-button[_ngcontent-%COMP%]:disabled{border-color:#e2e8f0!important;background:#f1f5f9!important;color:#94a3b8!important}.counter-empty[_ngcontent-%COMP%]{grid-column:1/-1;padding:45px;text-align:center;color:#718789}@media(max-width:650px){.counter-head[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.counter-bus-grid[_ngcontent-%COMP%]{grid-template-columns:1fr!important;padding:14px!important}.counter-message[_ngcontent-%COMP%]{margin:14px 14px 0!important}}", ".counter-tools[_ngcontent-%COMP%]{display:flex;align-items:end;gap:12px}.counter-tools[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:grid;gap:4px}.counter-tools[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin:0!important;color:#718789!important;font-size:.62rem!important;font-weight:800}.counter-tools[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:230px;height:36px;padding:0 11px;border:1px solid #cfdfde;border-radius:9px;background:#fff;font-size:.72rem}.counter-bus-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:10px!important;padding:14px 20px!important}.counter-bus-card[_ngcontent-%COMP%]{gap:10px!important;padding:13px!important}.bus-symbol[_ngcontent-%COMP%]{width:36px!important;height:36px!important}.occupancy-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.55rem!important}.counter-line[_ngcontent-%COMP%]{padding:7px 9px!important}.reset-button[_ngcontent-%COMP%]{min-height:36px!important;font-size:.72rem}.counter-pagination[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 20px;border-top:1px solid #e5eeee;background:#f8fbfb;color:#718789;font-size:.72rem}.counter-pagination[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px}.counter-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:34px;min-height:32px;padding:0}.counter-pagination[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#31575a}.no-alert[_ngcontent-%COMP%]{padding:18px 12px;border:1px dashed #cfe0de;border-radius:10px;color:#718789;font-size:.75rem;text-align:center}@media(max-width:1200px){.counter-bus-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:760px){.counter-head[_ngcontent-%COMP%], .counter-tools[_ngcontent-%COMP%]{align-items:stretch;flex-direction:column}.counter-tools[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%}.counter-bus-grid[_ngcontent-%COMP%]{grid-template-columns:1fr!important;padding:12px!important}.counter-pagination[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DemoPage, [{
        type: Component,
        args: [{ selector: 'app-demo', standalone: true, imports: [FleetMapComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"dashboard-hero\">\n  <div>\n    <p>Centre de controle</p>\n    <h1>Dashboard Dakar Bus</h1>\n    <span>Suivi temps reel du reseau, statistiques de performance et supervision des operations.</span>\n  </div>\n  <div class=\"hero-actions\" aria-label=\"Actions rapides\">\n    <button type=\"button\" class=\"ghost\" (click)=\"toggleAlertSound()\">{{ soundEnabled() ? 'Son activ\u00E9' : 'Activer le son' }}</button>\n    <button type=\"button\">Nouvelle alerte</button>\n  </div>\n</section>\n\n<section class=\"stats-grid\" aria-label=\"Statistiques de la plateforme\">\n  @for (stat of stats(); track stat.label) {\n    <article class=\"stat-card tone-{{ stat.tone }}\">\n      <div class=\"stat-icon\" aria-hidden=\"true\"></div>\n      <span>{{ stat.label }}</span>\n      <strong>{{ stat.value }}</strong>\n      <small>{{ stat.trend }}</small>\n    </article>\n  }\n</section>\n\n<section class=\"counter-admin\">\n  <header class=\"counter-head\"><div><p>Capteurs infrarouges</p><h2>Compteurs passagers</h2><span>Consultez l\u2019occupation et initialisez le compteur du v\u00E9hicule connect\u00E9.</span></div><div class=\"counter-tools\"><label><span>Rechercher</span><input type=\"search\" [value]=\"counterSearch()\" (input)=\"searchCounters($event)\" placeholder=\"Bus, ligne, immatriculation\"></label><span class=\"counter-live\"><i></i>Temps r\u00E9el</span></div></header>\n  @if (counterMessage()) { <p class=\"counter-message {{ counterMessageTone() }}\" role=\"status\">{{ counterMessage() }}</p> }\n  <div class=\"counter-bus-grid\">\n    @for (vehicle of visibleCounterCards(); track vehicle.id) {\n      <article class=\"counter-bus-card {{ vehicle.status.tone }}\">\n        <div class=\"counter-card-top\"><span class=\"bus-symbol\" aria-hidden=\"true\"><i></i></span><div><small>V\u00E9hicule</small><h3>{{ vehicle.busNumber }}</h3><span>{{ vehicle.registration }}</span></div><b>{{ vehicle.status.label }}</b></div>\n        <div class=\"counter-line\"><span>Ligne</span><strong>{{ vehicle.lineLabel }}</strong></div>\n        <div class=\"occupancy-row\"><div><span>Occupation actuelle</span><strong>{{ vehicle.passengers }}<small>/ {{ vehicle.capacity }}</small></strong></div><b>{{ vehicle.percentage }} %</b></div>\n        <div class=\"counter-gauge\" aria-hidden=\"true\"><i [style.width.%]=\"vehicle.gaugeWidth\"></i></div>\n        <button type=\"button\" class=\"reset-button\" (click)=\"resetCounter(vehicle.id)\" [disabled]=\"vehicle.resetDisabled\"><i aria-hidden=\"true\">\u21BB</i><span>{{ vehicle.resetLabel }}</span></button>\n      </article>\n    }\n    @if (!visibleCounterCards().length) { <div class=\"counter-empty\">Aucun compteur ne correspond \u00E0 la recherche.</div> }\n  </div>\n  @if (filteredCounterCards().length > counterPageSize) { <footer class=\"counter-pagination\"><span>{{ filteredCounterCards().length }} bus</span><div><button type=\"button\" class=\"secondary\" (click)=\"previousCounterPage()\" [disabled]=\"counterPage() === 1\">\u2190</button><b>Page {{ counterPage() }} / {{ counterTotalPages() }}</b><button type=\"button\" class=\"secondary\" (click)=\"nextCounterPage()\" [disabled]=\"counterPage() === counterTotalPages()\">\u2192</button></div></footer> }\n</section>\n\n<section class=\"dashboard-grid\">\n  <app-fleet-map [vehicles]=\"fleet.vehicles()\" />\n\n  <aside class=\"ops-panel\">\n    <div class=\"panel-head\">\n      <div>\n        <p>Operations</p>\n        <h2>Etat plateforme</h2>\n      </div>\n    </div>\n\n    <div class=\"ops-list\">\n      @for (item of operations(); track item.label) {\n        <article>\n          <span>{{ item.label }}</span>\n          <strong>{{ item.value }}</strong>\n          <small>{{ item.detail }}</small>\n        </article>\n      }\n    </div>\n\n    <div class=\"alert-feed\">\n      <h3>Alertes recentes</h3>\n      @for (vehicle of overloadAlerts(); track vehicle.id) {\n        <article class=\"live-overload\">\n          <span aria-hidden=\"true\"></span>\n          <div><strong>Surcharge d\u00E9tect\u00E9e \u00B7 Bus {{ vehicle.busNumber }}</strong><small>Ligne {{ vehicle.lineNumber }} \u00B7 {{ vehicle.passengers }}/{{ vehicle.capacity }} passagers</small><em>\u00C0 l'instant</em></div>\n        </article>\n      }\n      @if (!overloadAlerts().length) { <div class=\"no-alert\">Aucune surcharge d\u00E9tect\u00E9e.</div> }\n    </div>\n  </aside>\n</section>\n", styles: [".dashboard-hero,\n.stat-card,\n.map-card,\n.ops-panel,\n.module-section,\n.counter-admin {\n  border: 1px solid rgba(148, 163, 184, 0.24);\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.94);\n  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.08);\n}\n\n.counter-admin{margin-bottom:18px;padding:18px}.counter-bus-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px}.counter-bus-grid article{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:12px;border:1px solid #e2eceb;border-radius:12px;background:#f8fbfb}.counter-bus-grid article>span{padding:7px 9px;border-radius:8px;background:#dff7f4;color:#08776f;font-size:.72rem;font-weight:900}.counter-bus-grid strong,.counter-bus-grid small{display:block}.counter-bus-grid small{margin-top:3px;color:#64748b}.counter-bus-grid button{min-height:36px}.counter-message{padding:10px 12px;border-radius:9px;background:#e8faf8;color:#08776f;font-size:.8rem;font-weight:800}\n\n.dashboard-hero {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 18px;\n  padding: 26px;\n  background:\n    linear-gradient(135deg, rgba(15, 118, 110, 0.1), rgba(37, 99, 235, 0.06)),\n    #ffffff;\n}\n\n.dashboard-hero p,\n.dashboard-hero h1,\n.panel-head p,\n.panel-head h2,\n.alert-feed h3 {\n  margin: 0;\n}\n\n.dashboard-hero p,\n.panel-head p {\n  color: var(--primary);\n  font-size: 0.76rem;\n  font-weight: 900;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.dashboard-hero h1 {\n  margin-top: 6px;\n  font-size: clamp(1.9rem, 4vw, 3rem);\n  line-height: 1.02;\n}\n\n.dashboard-hero span,\n.panel-head h2 + span,\n.bus-row small,\n.ops-list small,\n.alert-feed small,\n.screen-grid span {\n  color: var(--muted);\n}\n\n.dashboard-hero span {\n  display: block;\n  max-width: 720px;\n  margin-top: 9px;\n  font-weight: 700;\n}\n\n.hero-actions {\n  display: flex;\n  gap: 10px;\n}\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.stat-card {\n  position: relative;\n  overflow: hidden;\n  min-height: 156px;\n  padding: 18px;\n}\n\n.stat-card::before {\n  position: absolute;\n  inset: auto 14px 14px auto;\n  width: 72px;\n  height: 72px;\n  border-radius: 999px;\n  background: currentColor;\n  opacity: 0.08;\n  content: \"\";\n}\n\n.stat-card span,\n.stat-card small {\n  display: block;\n  color: var(--muted);\n  font-weight: 800;\n}\n\n.stat-card strong {\n  display: block;\n  margin-top: 18px;\n  color: var(--text);\n  font-size: 2rem;\n  line-height: 1;\n}\n\n.stat-card small {\n  margin-top: 10px;\n}\n\n.stat-icon {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  margin-bottom: 16px;\n  border-radius: 8px;\n  background: currentColor;\n}\n\n.stat-icon::before {\n  position: absolute;\n  inset: 10px;\n  border: 2px solid #ffffff;\n  border-radius: 4px;\n  content: \"\";\n}\n\n.tone-green { color: #0f766e; }\n.tone-blue { color: #2563eb; }\n.tone-violet { color: #7c3aed; }\n.tone-red { color: #dc2626; }\n\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(320px, 0.75fr);\n  gap: 18px;\n  margin-bottom: 18px;\n}\n\n.ops-panel,\n.module-section {\n  padding: 18px;\n}\n\n.map-card {\n  display: flex;\n  min-height: 720px;\n  overflow: hidden;\n  flex-direction: column;\n  padding: 0;\n}\n\n.map-card > .panel-head {\n  margin-bottom: 0;\n  padding: 18px 18px 14px;\n}\n\n.panel-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 16px;\n}\n\n.panel-head h2 {\n  margin-top: 5px;\n  font-size: 1.25rem;\n}\n\n.live-badge {\n  position: relative;\n  padding: 7px 10px 7px 24px;\n  border-radius: 999px;\n  background: #dcfce7;\n  color: #166534;\n  font-size: 0.78rem;\n  font-weight: 900;\n}\n\n.live-badge::before {\n  position: absolute;\n  left: 10px;\n  top: 50%;\n  width: 7px;\n  height: 7px;\n  border-radius: 999px;\n  background: #16a34a;\n  box-shadow: 0 0 0 5px rgba(22, 163, 74, 0.14);\n  transform: translateY(-50%);\n  content: \"\";\n}\n\n.map-viewport {\n  position: relative;\n  display: grid;\n  flex: 1 1 auto;\n  width: 100%;\n  min-height: 560px;\n  overflow: hidden;\n  border: 0;\n  border-radius: 0;\n  background: #e2e8f0;\n}\n\n.google-map {\n  position: absolute !important;\n  inset: 0 !important;\n  z-index: 1;\n  display: block !important;\n  width: 100% !important;\n  min-width: 100% !important;\n  max-width: none !important;\n  height: 100% !important;\n  min-height: 100% !important;\n  border: 0 !important;\n}\n\n.map-overlay {\n  position: absolute;\n  left: 14px;\n  top: 14px;\n  z-index: 500;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  border: 1px solid rgba(148, 163, 184, 0.25);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.88);\n  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.12);\n  backdrop-filter: blur(10px);\n  color: #334155;\n  font-size: 0.78rem;\n  font-weight: 900;\n}\n\n.map-overlay::before {\n  width: 8px;\n  height: 8px;\n  border-radius: 999px;\n  background: #16a34a;\n  box-shadow: 0 0 0 5px rgba(22, 163, 74, 0.13);\n  content: \"\";\n}\n\n.bus-marker {\n  position: absolute;\n  z-index: 501;\n  display: grid;\n  width: 58px;\n  height: 38px;\n  min-height: 0;\n  padding: 0;\n  place-items: center;\n  border: 3px solid #ffffff;\n  border-radius: 8px;\n  background: var(--primary);\n  color: #ffffff;\n  box-shadow: 0 14px 28px rgba(15, 118, 110, 0.24);\n  transform: translate(-50%, -50%);\n}\n\n.bus-marker::before {\n  position: absolute;\n  inset: 8px 10px auto;\n  height: 7px;\n  border-radius: 3px;\n  background: rgba(255, 255, 255, 0.32);\n  content: \"\";\n}\n\n.bus-marker span {\n  position: relative;\n  z-index: 1;\n  margin-top: 10px;\n  font-size: 0.72rem;\n  font-weight: 900;\n}\n\n.bus-marker.warning {\n  background: #dc2626;\n  box-shadow: 0 14px 28px rgba(220, 38, 38, 0.22);\n}\n\n.bus-list {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 10px;\n  padding: 12px 18px 18px;\n  border-top: 1px solid #edf2f7;\n  background: #ffffff;\n}\n\n.bus-row {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) 88px;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border: 1px solid #edf2f7;\n  border-radius: 8px;\n  background: #f8fafc;\n}\n\n.bus-row > span {\n  display: grid;\n  width: 42px;\n  height: 34px;\n  place-items: center;\n  border-radius: 8px;\n  background: #e0f2fe;\n  color: #075985;\n  font-weight: 900;\n}\n\n.bus-row strong,\n.bus-row small {\n  display: block;\n}\n\nmeter {\n  width: 88px;\n  height: 10px;\n}\n\n.ops-list {\n  display: grid;\n  gap: 10px;\n}\n\n.ops-list article {\n  padding: 14px;\n  border: 1px solid #edf2f7;\n  border-radius: 8px;\n  background: #f8fafc;\n}\n\n.ops-list span,\n.ops-list strong,\n.ops-list small {\n  display: block;\n}\n\n.ops-list span {\n  color: var(--muted);\n  font-weight: 800;\n}\n\n.ops-list strong {\n  margin-top: 8px;\n  font-size: 1.7rem;\n}\n\n.alert-feed {\n  margin-top: 18px;\n}\n\n.alert-feed h3 {\n  font-size: 1rem;\n}\n\n.alert-feed article {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  gap: 10px;\n  margin-top: 12px;\n  padding: 12px;\n  border-radius: 8px;\n  background: #fff7ed;\n}\n\n.alert-feed article > span {\n  width: 10px;\n  height: 10px;\n  margin-top: 6px;\n  border-radius: 999px;\n  background: #f97316;\n}\n\n.alert-feed strong,\n.alert-feed small,\n.alert-feed em {\n  display: block;\n}\n\n.alert-feed em {\n  margin-top: 4px;\n  color: #c2410c;\n  font-size: 0.78rem;\n  font-style: normal;\n  font-weight: 800;\n}\n\n.screen-grid a {\n  box-shadow: none;\n}\n\n@media (max-width: 1120px) {\n  .stats-grid,\n  .dashboard-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .map-card {\n    grid-column: 1 / -1;\n  }\n}\n\n@media (max-width: 760px) {\n  .dashboard-hero,\n  .hero-actions {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .stats-grid,\n  .dashboard-grid,\n  .bus-list {\n    grid-template-columns: 1fr;\n  }\n\n  .map-viewport {\n    min-height: 420px;\n  }\n\n  .bus-row {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n\n  meter {\n    grid-column: 1 / -1;\n    width: 100%;\n  }\n}\n", ".counter-admin{margin-bottom:20px!important;padding:0!important;overflow:hidden!important;border-radius:18px!important}.counter-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;padding:22px 24px;border-bottom:1px solid #e5eeee;background:linear-gradient(135deg,#f0fbf9,#fff)}.counter-head p,.counter-head h2{margin:0}.counter-head p{color:#07877f;font-size:.7rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}.counter-head h2{margin-top:5px;color:#123f43;font-size:1.35rem}.counter-head div>span{display:block;margin-top:6px;color:#718789;font-size:.82rem}.counter-live{display:flex!important;align-items:center;gap:8px;padding:8px 11px;border-radius:99px;background:#dcfce7;color:#166534!important;font-size:.7rem!important;font-weight:850;white-space:nowrap}.counter-live i{width:7px;height:7px;border-radius:50%;background:#16a34a;box-shadow:0 0 0 5px #16a34a1c}.counter-message{margin:16px 20px 0!important;padding:11px 13px!important;border-radius:10px!important;font-size:.78rem!important}.counter-message.success{border:1px solid #bbf7d0;background:#f0fdf4!important;color:#166534!important}.counter-message.error{border:1px solid #fecaca;background:#fff1f2!important;color:#991b1b!important}.counter-bus-grid{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(290px,1fr))!important;gap:14px!important;padding:20px!important}.counter-bus-card{display:flex!important;min-width:0;overflow:hidden;flex-direction:column;gap:16px!important;padding:18px!important;border:1px solid #dfeae9!important;border-top:4px solid #10b981!important;border-radius:14px!important;background:#fff!important;box-shadow:0 10px 30px #0f172a0a}.counter-bus-card.full{border-top-color:#f59e0b!important}.counter-bus-card.danger{border-top-color:#ef4444!important}.counter-card-top{display:grid!important;grid-template-columns:auto minmax(0,1fr) auto!important;align-items:center!important;gap:11px!important}.bus-symbol{position:relative;display:grid!important;width:43px;height:43px;place-items:center;border-radius:11px!important;background:#dff7f4!important}.bus-symbol::before{width:21px;height:17px;border:2px solid #087d76;border-radius:4px;content:\"\"}.bus-symbol i{position:absolute;bottom:9px;width:4px;height:4px;border-radius:50%;background:#087d76;box-shadow:13px 0 #087d76}.counter-card-top small,.counter-card-top h3,.counter-card-top span{display:block;margin:0}.counter-card-top small{color:#94a3b8;font-size:.62rem;font-weight:800;text-transform:uppercase}.counter-card-top h3{margin:2px 0;color:#133f43;font-size:1.05rem}.counter-card-top div>span{color:#718789;font-size:.7rem}.counter-card-top>b{padding:6px 9px;border-radius:99px;background:#dcfce7;color:#166534;font-size:.64rem}.full .counter-card-top>b{background:#fef3c7;color:#92400e}.danger .counter-card-top>b{background:#fee2e2;color:#991b1b}.counter-line{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:12px!important;padding:10px 11px!important;border-radius:9px!important;background:#f7faf9!important}.counter-line span{color:#789093!important;font-size:.68rem!important}.counter-line strong{min-width:0;overflow:hidden;color:#245256!important;font-size:.72rem!important;text-align:right;text-overflow:ellipsis;white-space:nowrap}.occupancy-row{display:flex!important;align-items:end!important;justify-content:space-between!important}.occupancy-row span{display:block;color:#718789;font-size:.7rem}.occupancy-row strong{display:block;margin-top:3px;color:#113f43;font-size:2rem;line-height:1}.occupancy-row strong small{margin-left:3px;color:#94a3b8;font-size:.75rem}.occupancy-row>b{color:#087d76;font-size:.82rem}.full .occupancy-row>b{color:#b45309}.danger .occupancy-row>b{color:#dc2626}.counter-gauge{height:9px!important;overflow:hidden;border-radius:99px!important;background:#e7efee!important}.counter-gauge i{display:block;height:100%;border-radius:inherit;background:linear-gradient(90deg,#10b981,#34d399);transition:width .3s ease}.full .counter-gauge i{background:linear-gradient(90deg,#f59e0b,#fbbf24)}.danger .counter-gauge i{background:linear-gradient(90deg,#ef4444,#f87171)}.reset-button{display:flex!important;width:100%;min-height:42px!important;align-items:center;justify-content:center;gap:8px;border:1px solid #bce5e1!important;background:#eaf9f7!important;color:#08776f!important;box-shadow:none!important}.reset-button i{font-size:1rem;font-style:normal}.reset-button:disabled{border-color:#e2e8f0!important;background:#f1f5f9!important;color:#94a3b8!important}.counter-empty{grid-column:1/-1;padding:45px;text-align:center;color:#718789}@media(max-width:650px){.counter-head{align-items:flex-start;flex-direction:column}.counter-bus-grid{grid-template-columns:1fr!important;padding:14px!important}.counter-message{margin:14px 14px 0!important}}\n", ".counter-tools{display:flex;align-items:end;gap:12px}.counter-tools label{display:grid;gap:4px}.counter-tools label>span{margin:0!important;color:#718789!important;font-size:.62rem!important;font-weight:800}.counter-tools input{width:230px;height:36px;padding:0 11px;border:1px solid #cfdfde;border-radius:9px;background:#fff;font-size:.72rem}.counter-bus-grid{grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:10px!important;padding:14px 20px!important}.counter-bus-card{gap:10px!important;padding:13px!important}.bus-symbol{width:36px!important;height:36px!important}.occupancy-row strong{font-size:1.55rem!important}.counter-line{padding:7px 9px!important}.reset-button{min-height:36px!important;font-size:.72rem}.counter-pagination{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:11px 20px;border-top:1px solid #e5eeee;background:#f8fbfb;color:#718789;font-size:.72rem}.counter-pagination>div{display:flex;align-items:center;gap:9px}.counter-pagination button{min-width:34px;min-height:32px;padding:0}.counter-pagination b{color:#31575a}.no-alert{padding:18px 12px;border:1px dashed #cfe0de;border-radius:10px;color:#718789;font-size:.75rem;text-align:center}@media(max-width:1200px){.counter-bus-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}}@media(max-width:760px){.counter-head,.counter-tools{align-items:stretch;flex-direction:column}.counter-tools input{width:100%}.counter-bus-grid{grid-template-columns:1fr!important;padding:12px!important}.counter-pagination{align-items:flex-start;flex-direction:column}}\n"] }]
    }], () => [{ type: i1.RealtimeService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DemoPage, { className: "DemoPage", filePath: "src/app/pages/demo/demo.page.ts", lineNumber: 15 }); })();
