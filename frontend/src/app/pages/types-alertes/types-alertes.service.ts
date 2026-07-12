import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { TypesAlertes } from './types-alertes.model';

@Injectable({ providedIn: 'root' })
export class TypesAlertesService {
  private readonly baseUrl = `${environment.apiUrl}/types-alertes`;

  async list(): Promise<TypesAlertes[]> {
    const response = await fetch(this.baseUrl);
    return this.handle<TypesAlertes[]>(response);
  }

  async create(payload: Partial<TypesAlertes>): Promise<TypesAlertes> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<TypesAlertes>(response);
  }

  async update(id: string | number, payload: Partial<TypesAlertes>): Promise<TypesAlertes> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<TypesAlertes>(response);
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
