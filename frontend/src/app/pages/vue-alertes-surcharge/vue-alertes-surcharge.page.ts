import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VueAlertesSurcharge } from './vue-alertes-surcharge.model';
import { VueAlertesSurchargeService } from './vue-alertes-surcharge.service';

@Component({
  selector: 'app-vue-alertes-surcharge',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vue-alertes-surcharge.page.html',
  styleUrl: './vue-alertes-surcharge.page.scss'
})
export class VueAlertesSurchargePage implements OnInit {
  items: VueAlertesSurcharge[] = [];
  form: Record<string, string | number | boolean | null> = this.emptyForm();
  editingId: string | number | null = null;
  loading = false;
  error = '';
  formOpen = false;
  confirmOpen = false;
  successOpen = false;
  successMessage = '';
  pendingDelete: VueAlertesSurcharge | null = null;

  constructor(
    private service: VueAlertesSurchargeService,
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

  edit(item: VueAlertesSurcharge): void {
    this.editingId = item.idAlerte as string | number;
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
        await this.service.create(this.form as Partial<VueAlertesSurcharge>);
        this.successMessage = 'Element cree avec succes.';
      } else {
        await this.service.update(this.editingId, this.form as Partial<VueAlertesSurcharge>);
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

  askRemove(item: VueAlertesSurcharge): void {
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
      await this.service.remove(this.pendingDelete.idAlerte as string | number);
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
    numeroBus: '',
    immatriculation: '',
    nomType: '',
    nomStatut: '',
    message: '',
    niveau: '',
    nombrePassagers: '',
    capaciteMax: '',
    dateAlerte: ''
    };
  }
}
