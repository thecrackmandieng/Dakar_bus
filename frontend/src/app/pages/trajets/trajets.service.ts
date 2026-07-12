import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AffectationLigne, Trajets } from './trajets.model';

@Injectable({ providedIn: 'root' })
export class TrajetsService {
  private readonly baseUrl = `${environment.apiUrl}/trajets`;

  async list(): Promise<Trajets[]> {
    const response = await fetch(this.baseUrl);
    return this.handle<Trajets[]>(response);
  }

  async activeAssignments(): Promise<AffectationLigne[]> {
    return this.handle(await fetch(`${this.baseUrl}/affectations/actives`));
  }

  async assign(idBus: string, idLigne: string): Promise<Trajets> {
    return this.handle(await fetch(`${this.baseUrl}/affecter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idBus, idLigne })
    }));
  }

  async create(payload: Partial<Trajets>): Promise<Trajets> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<Trajets>(response);
  }

  async update(id: string | number, payload: Partial<Trajets>): Promise<Trajets> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<Trajets>(response);
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
