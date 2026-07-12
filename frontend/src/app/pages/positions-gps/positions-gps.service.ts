import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PositionsGps } from './positions-gps.model';

@Injectable({ providedIn: 'root' })
export class PositionsGpsService {
  private readonly baseUrl = `${environment.apiUrl}/positions-gps`;

  async list(): Promise<PositionsGps[]> {
    const response = await fetch(this.baseUrl);
    return this.handle<PositionsGps[]>(response);
  }

  async create(payload: Partial<PositionsGps>): Promise<PositionsGps> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<PositionsGps>(response);
  }

  async update(id: string | number, payload: Partial<PositionsGps>): Promise<PositionsGps> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<PositionsGps>(response);
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
