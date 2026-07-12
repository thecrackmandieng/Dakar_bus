import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Lignes } from './lignes.model';

@Injectable({ providedIn: 'root' })
export class LignesService {
  private readonly baseUrl = `${environment.apiUrl}/lignes`;

  async list(): Promise<Lignes[]> {
    const response = await fetch(this.baseUrl);
    return this.handle<Lignes[]>(response);
  }

  async create(payload: Partial<Lignes>): Promise<Lignes> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<Lignes>(response);
  }

  async update(id: string | number, payload: Partial<Lignes>): Promise<Lignes> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return this.handle<Lignes>(response);
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
