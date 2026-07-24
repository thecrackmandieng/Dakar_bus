import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class TrajetsService {
    baseUrl = `${environment.apiUrl}/trajets`;
    async list() {
        const response = await fetch(this.baseUrl);
        return this.handle(response);
    }
    async activeAssignments() {
        return this.handle(await fetch(`${this.baseUrl}/affectations/actives`));
    }
    async assign(idBus, idLigne) {
        return this.handle(await fetch(`${this.baseUrl}/affecter`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idBus, idLigne })
        }));
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
    static ɵfac = function TrajetsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TrajetsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TrajetsService, factory: TrajetsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TrajetsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
