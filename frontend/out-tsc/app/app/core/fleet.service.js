import { Injectable, computed, inject, signal } from '@angular/core';
import { VueBusTempsReelService } from '../pages/vue-bus-temps-reel/vue-bus-temps-reel.service';
import { RealtimeService } from './realtime.service';
import { LignesService } from '../pages/lignes/lignes.service';
import * as i0 from "@angular/core";
export class FleetService {
    api = inject(VueBusTempsReelService);
    realtime = inject(RealtimeService);
    linesApi = inject(LignesService);
    databaseVehicles = signal([], ...(ngDevMode ? [{ debugName: "databaseVehicles" }] : /* istanbul ignore next */ []));
    lineNames = signal(new Map(), ...(ngDevMode ? [{ debugName: "lineNames" }] : /* istanbul ignore next */ []));
    refreshTimer = window.setInterval(() => void this.refresh(), 5000);
    vehicles = computed(() => {
        const sensor = this.realtime.telemetry();
        const vehicles = this.databaseVehicles();
        if (!sensor?.gps.fiable || sensor.gps.latitude === null || sensor.gps.longitude === null) {
            return vehicles;
        }
        const assignedVehicle = vehicles.find(({ id, busNumber }) => id === sensor.busId || busNumber === sensor.busId);
        const lineNumber = assignedVehicle?.lineNumber ?? sensor.lineNumber ?? '';
        const current = {
            id: sensor.busId,
            busNumber: assignedVehicle?.busNumber ?? sensor.busId,
            registration: assignedVehicle?.registration ?? 'Non renseignée',
            lineNumber,
            lineName: assignedVehicle?.lineName ?? this.lineNames().get(lineNumber) ?? 'Ligne non affectée',
            latitude: sensor.gps.latitude,
            longitude: sensor.gps.longitude,
            speed: sensor.gps.vitesse ?? 0,
            passengers: sensor.passengers.passagers,
            capacity: assignedVehicle?.capacity ?? sensor.capacity,
            updatedAt: sensor.updatedAt
        };
        return [current, ...vehicles.filter(({ id, busNumber }) => id !== current.id && busNumber !== current.busNumber)];
    }, ...(ngDevMode ? [{ debugName: "vehicles" }] : /* istanbul ignore next */ []));
    constructor() {
        void this.refresh();
    }
    ngOnDestroy() {
        window.clearInterval(this.refreshTimer);
    }
    async refresh() {
        try {
            const [rows, lines] = await Promise.all([this.api.list(), this.linesApi.list()]);
            this.lineNames.set(new Map(lines.filter(({ actif }) => actif).map(({ numeroLigne, nomLigne }) => [numeroLigne, nomLigne])));
            this.databaseVehicles.set(rows.map((row) => this.toVehicle(row)));
        }
        catch {
            // Le flux du capteur local reste disponible si la vue flotte est momentanément indisponible.
        }
    }
    toVehicle(row) {
        return {
            id: String(row.idBus),
            busNumber: row.numeroBus,
            registration: row.immatriculation,
            lineNumber: row.numeroLigne,
            lineName: row.nomLigne,
            latitude: row.latitude === null || row.latitude === undefined ? Number.NaN : Number(row.latitude),
            longitude: row.longitude === null || row.longitude === undefined ? Number.NaN : Number(row.longitude),
            speed: Number(row.vitesse),
            passengers: Number(row.nombrePassagers),
            capacity: Number(row.capaciteMax),
            updatedAt: row.datePosition
        };
    }
    static ɵfac = function FleetService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FleetService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FleetService, factory: FleetService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FleetService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
