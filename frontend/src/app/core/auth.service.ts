import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';

export type UserRole = 'admin' | 'chauffeur';

export interface SessionUser {
  readonly name: string;
  readonly role: UserRole;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'ddtrack.session';
  readonly user = signal<SessionUser | null>(this.restoreSession());
  readonly isAuthenticated = computed(() => this.user() !== null);
  readonly isDriver = computed(() => this.user()?.role === 'chauffeur');

  constructor(private readonly router: Router) {}

  login(identifier: string, role: UserRole): void {
    const normalizedIdentifier = identifier.trim().toLowerCase();
    const user: SessionUser = {
      name: normalizedIdentifier,
      role
    };

    localStorage.setItem(this.storageKey, JSON.stringify(user));
    this.user.set(user);
    void this.router.navigateByUrl(user.role === 'chauffeur' ? '/chauffeur' : '/dashboard');
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.user.set(null);
    void this.router.navigateByUrl('/login');
  }

  private restoreSession(): SessionUser | null {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) ?? 'null') as SessionUser | null;
    } catch {
      localStorage.removeItem(this.storageKey);
      return null;
    }
  }
}
