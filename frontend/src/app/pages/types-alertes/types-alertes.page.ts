import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypesAlertes } from './types-alertes.model';
import { TypesAlertesService } from './types-alertes.service';

@Component({
  selector: 'app-types-alertes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './types-alertes.page.html',
  styleUrl: './types-alertes.page.scss'
})
export class TypesAlertesPage implements OnInit {
  items: TypesAlertes[] = [];
  form: Record<string, string | number | boolean | null> = this.emptyForm();
  editingId: string | number | null = null;
  loading = false;
  error = '';
  formOpen = false;
  confirmOpen = false;
  successOpen = false;
  successMessage = '';
  pendingDelete: TypesAlertes | null = null;

  constructor(
    private service: TypesAlertesService,
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

  edit(item: TypesAlertes): void {
    this.editingId = item.idTypeAlerte as string | number;
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
        await this.service.create(this.form as Partial<TypesAlertes>);
        this.successMessage = 'Element cree avec succes.';
      } else {
        await this.service.update(this.editingId, this.form as Partial<TypesAlertes>);
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

  askRemove(item: TypesAlertes): void {
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
      await this.service.remove(this.pendingDelete.idTypeAlerte as string | number);
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
    nomType: '',
    description: ''
    };
  }
}
