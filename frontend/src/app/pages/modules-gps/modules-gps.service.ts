import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ConnectedGpsModule, ModuleGps } from './modules-gps.model';

@Injectable({ providedIn: 'root' })
export class ModulesGpsService {
  private readonly url = `${environment.apiUrl}/modules-gps`;

  async list(): Promise<ModuleGps[]> {
    return this.handle(await fetch(this.url));
  }

  async connected(): Promise<ConnectedGpsModule[]> {
    return this.handle(await fetch(`${environment.apiUrl}/realtime/connected-gps-modules`));
  }

  async save(id: string | null, payload: Partial<ModuleGps>): Promise<ModuleGps> {
    return this.handle(await fetch(id ? `${this.url}/${id}` : this.url, {
      method: id ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }));
  }

  async remove(id: string): Promise<void> {
    await this.handle<void>(await fetch(`${this.url}/${id}`, { method: 'DELETE' }));
  }

  private async handle<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const result = await response.json().catch(() => null) as { message?: string } | null;
      throw new Error(result?.message ?? 'Opération impossible.');
    }
    return response.status === 204 ? undefined as T : response.json() as Promise<T>;
  }
}
