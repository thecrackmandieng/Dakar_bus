import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
export const authGuard = () => {
    const auth = inject(AuthService);
    return auth.isAuthenticated() ? true : inject(Router).createUrlTree(['/login']);
};
export const adminGuard = () => {
    const auth = inject(AuthService);
    if (!auth.isAuthenticated()) {
        return inject(Router).createUrlTree(['/login']);
    }
    return auth.isDriver() ? inject(Router).createUrlTree(['/chauffeur']) : true;
};
export const guestGuard = () => {
    const auth = inject(AuthService);
    if (!auth.isAuthenticated()) {
        return true;
    }
    return inject(Router).createUrlTree([auth.isDriver() ? '/chauffeur' : '/dashboard']);
};
