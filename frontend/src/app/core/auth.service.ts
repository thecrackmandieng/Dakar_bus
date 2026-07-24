import { Injectable, computed, signal } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

export type UserRole = 'admin' | 'superviseur' | 'conducteur';

export interface SessionUser {
  readonly name: string;
  readonly role: UserRole;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly storageKey = 'ddtrack.session';
  readonly user = signal<SessionUser | null>(this.restoreSession());
  readonly isAuthenticated = computed(() => this.user() !== null);
  readonly isDriver = computed(() => this.user()?.role === 'conducteur');
  readonly isSupervisor = computed(() => this.user()?.role === 'superviseur');
  readonly roleLabel = computed(() => {
    const role = this.user()?.role;
    return role === 'conducteur' ? 'Conducteur' : role === 'superviseur' ? 'Superviseur' : 'Administrateur';
  });

  constructor(private readonly router: Router) {}

  async login(identifier: string, password: string): Promise<boolean> {
    const response = await fetch(`${environment.apiUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: identifier.trim(), password })
    });

    if (!response.ok) {
      return false;
    }

    const user = await response.json() as SessionUser;
    localStorage.setItem(this.storageKey, JSON.stringify(user));
    this.user.set(user);
    void this.router.navigateByUrl(user.role === 'conducteur' ? '/chauffeur' : '/dashboard');
    return true;
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
