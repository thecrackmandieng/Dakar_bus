import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import * as i0 from "@angular/core";
export class RealtimeService {
    telemetry = signal(null, ...(ngDevMode ? [{ debugName: "telemetry" }] : /* istanbul ignore next */ []));
    connected = signal(false, ...(ngDevMode ? [{ debugName: "connected" }] : /* istanbul ignore next */ []));
    events = new EventSource(`${environment.apiUrl}/realtime/stream`);
    constructor() {
        this.events.onopen = () => this.connected.set(true);
        this.events.onerror = () => this.connected.set(false);
        this.events.onmessage = ({ data }) => this.telemetry.set(JSON.parse(data));
    }
    async resetPassengerCounter(busId) {
        const response = await fetch(`${environment.apiUrl}/realtime/buses/${encodeURIComponent(busId)}/reset-counter`, { method: 'POST' });
        if (!response.ok) {
            const result = await response.json().catch(() => null);
            throw new Error(result?.message ?? 'Initialisation du compteur impossible.');
        }
    }
    ngOnDestroy() {
        this.events.close();
    }
    static ɵfac = function RealtimeService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RealtimeService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RealtimeService, factory: RealtimeService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RealtimeService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
