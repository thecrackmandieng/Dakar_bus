import { Injectable, computed, signal } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AuthService {
    router;
    storageKey = 'ddtrack.session';
    user = signal(this.restoreSession(), ...(ngDevMode ? [{ debugName: "user" }] : /* istanbul ignore next */ []));
    isAuthenticated = computed(() => this.user() !== null, ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : /* istanbul ignore next */ []));
    isDriver = computed(() => this.user()?.role === 'chauffeur', ...(ngDevMode ? [{ debugName: "isDriver" }] : /* istanbul ignore next */ []));
    constructor(router) {
        this.router = router;
    }
    login(identifier, role) {
        const normalizedIdentifier = identifier.trim().toLowerCase();
        const user = {
            name: normalizedIdentifier,
            role
        };
        localStorage.setItem(this.storageKey, JSON.stringify(user));
        this.user.set(user);
        void this.router.navigateByUrl(user.role === 'chauffeur' ? '/chauffeur' : '/dashboard');
    }
    logout() {
        localStorage.removeItem(this.storageKey);
        this.user.set(null);
        void this.router.navigateByUrl('/login');
    }
    restoreSession() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey) ?? 'null');
        }
        catch {
            localStorage.removeItem(this.storageKey);
            return null;
        }
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.Router)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [{ type: i1.Router }], null); })();
