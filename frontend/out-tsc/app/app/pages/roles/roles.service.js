import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class RolesService {
    baseUrl = `${environment.apiUrl}/roles`;
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
    static ɵfac = function RolesService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RolesService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RolesService, factory: RolesService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RolesService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
