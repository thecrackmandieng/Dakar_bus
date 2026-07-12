import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Notifications } from './notifications.model';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notifications.page.html',
  styleUrl: './notifications.page.scss'
})
export class NotificationsPage implements OnInit {
  items: Notifications[] = [];
  form: Record<string, string | number | boolean | null> = this.emptyForm();
  editingId: string | number | null = null;
  loading = false;
  error = '';
  formOpen = false;
  confirmOpen = false;
  successOpen = false;
  successMessage = '';
  pendingDelete: Notifications | null = null;

  constructor(
    private service: NotificationsService,
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

  edit(item: Notifications): void {
    this.editingId = item.idNotification as string | number;
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
        await this.service.create(this.form as Partial<Notifications>);
        this.successMessage = 'Element cree avec succes.';
      } else {
        await this.service.update(this.editingId, this.form as Partial<Notifications>);
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

  askRemove(item: Notifications): void {
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
      await this.service.remove(this.pendingDelete.idNotification as string | number);
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
    idUtilisateur: '',
    titre: '',
    message: '',
    typeNotification: '',
    lu: false,
    createdAt: ''
    };
  }
}
