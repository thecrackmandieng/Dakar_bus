import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Utilisateurs } from './utilisateurs.model';
import { UtilisateursService } from './utilisateurs.service';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './utilisateurs.page.html',
  styleUrl: './utilisateurs.page.scss'
})
export class UtilisateursPage implements OnInit {
  items: Utilisateurs[] = [];
  form: Record<string, string | number | boolean | null> = this.emptyForm();
  editingId: string | number | null = null;
  loading = false;
  error = '';
  formOpen = false;
  confirmOpen = false;
  successOpen = false;
  successMessage = '';
  pendingDelete: Utilisateurs | null = null;

  constructor(
    private service: UtilisateursService,
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

  edit(item: Utilisateurs): void {
    this.editingId = item.idUtilisateur as string | number;
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
        await this.service.create(this.form as Partial<Utilisateurs>);
        this.successMessage = 'Element cree avec succes.';
      } else {
        await this.service.update(this.editingId, this.form as Partial<Utilisateurs>);
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

  askRemove(item: Utilisateurs): void {
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
      await this.service.remove(this.pendingDelete.idUtilisateur as string | number);
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
    idRole: '',
    nomComplet: '',
    telephone: '',
    email: '',
    motDePasse: '',
    adresse: '',
    photo: '',
    actif: false,
    createdAt: '',
    updatedAt: ''
    };
  }
}
