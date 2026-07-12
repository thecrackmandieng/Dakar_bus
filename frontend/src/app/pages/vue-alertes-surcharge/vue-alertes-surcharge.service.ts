import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { VueAlertesSurcharge } from './vue-alertes-surcharge.model';

@Injectable({ providedIn: 'root' })
export class VueAlertesSurchargeService {
  private readonly baseUrl = `${environment.apiUrl}/vue-alertes-surcharge`;

  async list(): Promise<VueAlertesSurcharge[]> {
    const response = await fetch(this.baseUrl);
    return this.handle<VueAlertesSurcharge[]>(response);
  }

  async create(payload: Partial<VueAlertesSurcharge>): Promise<VueAlertesSurcharge> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<VueAlertesSurcharge>(response);
  }

  async update(id: string | number, payload: Partial<VueAlertesSurcharge>): Promise<VueAlertesSurcharge> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<VueAlertesSurcharge>(response);
  }

  async remove(id: string | number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' });
    await this.handle<void>(response);
  }

  private async handle<T>(response: Response): Promise<T> {
    if (!response.ok) {
      throw new Error(await response.text());
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return response.json() as Promise<T>;
  }
}
