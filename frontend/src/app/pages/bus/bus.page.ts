import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Bus } from './bus.model';
import { BusService } from './bus.service';

@Component({
  selector: 'app-bus',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bus.page.html',
  styleUrl: './bus.page.scss'
})
export class BusPage implements OnInit {
  items: Bus[] = [];
  form: Record<string, string | number | boolean | null> = this.emptyForm();
  editingId: string | number | null = null;
  loading = false;
  error = '';
  formOpen = false;
  confirmOpen = false;
  successOpen = false;
  successMessage = '';
  pendingDelete: Bus | null = null;

  constructor(
    private service: BusService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    void this.load();
  }

  private refresh(): void {
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }

  async load(): Promise<void> {
    this.loading = true;
    this.error = '';
    this.refresh();
    try {
      this.items = await this.service.list();
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Chargement impossible.';
    } finally {
      this.loading = false;
      this.refresh();
    }
  }

  openCreate(): void {
    this.editingId = null;
    this.form = this.emptyForm();
    this.error = '';
    this.formOpen = true;
    this.refresh();
  }

  edit(item: Bus): void {
    this.editingId = item.idBus as string | number;
    this.form = { ...item } as Record<string, string | number | boolean | null>;
    this.error = '';
    this.formOpen = true;
    this.refresh();
  }

  cancel(): void {
    this.editingId = null;
    this.form = this.emptyForm();
    this.formOpen = false;
    this.refresh();
  }

  async save(): Promise<void> {
    this.loading = true;
    this.error = '';
    this.refresh();
    try {
      if (this.editingId === null) {
        await this.service.create(this.form as Partial<Bus>);
        this.successMessage = 'Element cree avec succes.';
      } else {
        await this.service.update(this.editingId, this.form as Partial<Bus>);
        this.successMessage = 'Element modifie avec succes.';
      }
      this.cancel();
      await this.load();
      this.successOpen = true;
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Enregistrement impossible.';
    } finally {
      this.loading = false;
      this.refresh();
    }
  }

  askRemove(item: Bus): void {
    this.pendingDelete = item;
    this.confirmOpen = true;
    this.error = '';
    this.refresh();
  }

  closeConfirm(): void {
    this.pendingDelete = null;
    this.confirmOpen = false;
    this.refresh();
  }

  closeSuccess(): void {
    this.successOpen = false;
    this.successMessage = '';
    this.refresh();
  }

  async confirmRemove(): Promise<void> {
    if (!this.pendingDelete) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.refresh();
    try {
      await this.service.remove(this.pendingDelete.idBus as string | number);
      this.closeConfirm();
      await this.load();
      this.successMessage = 'Element supprime avec succes.';
      this.successOpen = true;
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Suppression impossible.';
    } finally {
      this.loading = false;
      this.refresh();
    }
  }

  private emptyForm(): Record<string, string | number | boolean | null> {
    return {
    idConducteur: '',
    idReceveur: '',
    numeroBus: '',
    immatriculation: '',
    marque: '',
    modele: '',
    capaciteMax: '',
    etatBus: '',
    actif: false,
    createdAt: ''
    };
  }
}
