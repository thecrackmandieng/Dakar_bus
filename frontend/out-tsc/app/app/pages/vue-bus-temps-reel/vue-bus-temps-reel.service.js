import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class VueBusTempsReelService {
    baseUrl = `${environment.apiUrl}/vue-bus-temps-reel`;
    async list() {
        const response = await fetch(this.baseUrl);
        return this.handle(response);
    }
    async create(payload) {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return this.handle(response);
    }
    async update(id, payload) {
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return this.handle(response);
    }
    async remove(id) {
        const response = await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' });
        await this.handle(response);
    }
    async handle(response) {
        if (!response.ok) {
            throw new Error(await response.text());
        }
        if (response.status === 204) {
            return undefined;
        }
        return response.json();
    }
    static ɵfac = function VueBusTempsReelService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || VueBusTempsReelService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: VueBusTempsReelService, factory: VueBusTempsReelService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(VueBusTempsReelService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
