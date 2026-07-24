import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class ModulesGpsService {
    url = `${environment.apiUrl}/modules-gps`;
    async list() {
        return this.handle(await fetch(this.url));
    }
    async connected() {
        return this.handle(await fetch(`${environment.apiUrl}/realtime/connected-gps-modules`));
    }
    async save(id, payload) {
        return this.handle(await fetch(id ? `${this.url}/${id}` : this.url, {
            method: id ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }));
    }
    async remove(id) {
        await this.handle(await fetch(`${this.url}/${id}`, { method: 'DELETE' }));
    }
    async handle(response) {
        if (!response.ok) {
            const result = await response.json().catch(() => null);
            throw new Error(result?.message ?? 'Opération impossible.');
        }
        return response.status === 204 ? undefined : response.json();
    }
    static ɵfac = function ModulesGpsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModulesGpsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModulesGpsService, factory: ModulesGpsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModulesGpsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
