import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "./bus.service";
import * as i2 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.idBus;
function BusPage_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error);
} }
function BusPage_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1, "Chargement...");
    i0.ɵɵelementEnd();
} }
function BusPage_Conditional_21_For_24_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td", 8)(18, "button", 1);
    i0.ɵɵlistener("click", function BusPage_Conditional_21_For_24_Template_button_click_18_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.edit(item_r3)); });
    i0.ɵɵtext(19, "Editer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 9);
    i0.ɵɵlistener("click", function BusPage_Conditional_21_For_24_Template_button_click_20_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.askRemove(item_r3)); });
    i0.ɵɵtext(21, "Supprimer");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.numeroBus);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.immatriculation);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.marque);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.modele);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.capaciteMax);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.etatBus);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.actif);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.createdAt);
} }
function BusPage_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Numero Bus");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Immatriculation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Marque");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Modele");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Capacite Max");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Etat Bus");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Actif");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Created At");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "tbody");
    i0.ɵɵrepeaterCreate(23, BusPage_Conditional_21_For_24_Template, 22, 8, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(23);
    i0.ɵɵrepeater(ctx_r0.items);
} }
function BusPage_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function BusPage_Conditional_22_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancel()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "section", 11)(2, "div", 12)(3, "div")(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 13);
    i0.ɵɵlistener("click", function BusPage_Conditional_22_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancel()); });
    i0.ɵɵtext(9, "x");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "form", 14);
    i0.ɵɵlistener("ngSubmit", function BusPage_Conditional_22_Template_form_ngSubmit_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵelementStart(11, "label");
    i0.ɵɵtext(12, " Id Conducteur ");
    i0.ɵɵelementStart(13, "input", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["idConducteur"], $event) || (ctx_r0.form["idConducteur"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "label");
    i0.ɵɵtext(15, " Id Receveur ");
    i0.ɵɵelementStart(16, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["idReceveur"], $event) || (ctx_r0.form["idReceveur"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "label");
    i0.ɵɵtext(18, " Numero Bus ");
    i0.ɵɵelementStart(19, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["numeroBus"], $event) || (ctx_r0.form["numeroBus"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label");
    i0.ɵɵtext(21, " Immatriculation ");
    i0.ɵɵelementStart(22, "input", 18);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["immatriculation"], $event) || (ctx_r0.form["immatriculation"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "label");
    i0.ɵɵtext(24, " Marque ");
    i0.ɵɵelementStart(25, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["marque"], $event) || (ctx_r0.form["marque"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "label");
    i0.ɵɵtext(27, " Modele ");
    i0.ɵɵelementStart(28, "input", 20);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["modele"], $event) || (ctx_r0.form["modele"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "label");
    i0.ɵɵtext(30, " Capacite Max ");
    i0.ɵɵelementStart(31, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["capaciteMax"], $event) || (ctx_r0.form["capaciteMax"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "label");
    i0.ɵɵtext(33, " Etat Bus ");
    i0.ɵɵelementStart(34, "input", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_34_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["etatBus"], $event) || (ctx_r0.form["etatBus"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "label");
    i0.ɵɵtext(36, " Actif ");
    i0.ɵɵelementStart(37, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["actif"], $event) || (ctx_r0.form["actif"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "label");
    i0.ɵɵtext(39, " Created At ");
    i0.ɵɵelementStart(40, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function BusPage_Conditional_22_Template_input_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.form["createdAt"], $event) || (ctx_r0.form["createdAt"] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 25)(42, "button", 26);
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 5);
    i0.ɵɵlistener("click", function BusPage_Conditional_22_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancel()); });
    i0.ɵɵtext(45, "Annuler");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.editingId === null ? "Creation" : "Modification");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.editingId === null ? "Nouvel element" : "Modifier element");
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["idConducteur"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["idReceveur"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["numeroBus"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["immatriculation"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["marque"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["modele"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["capaciteMax"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["etatBus"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["actif"]);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.form["createdAt"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.loading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.editingId === null ? "Creer" : "Mettre a jour");
} }
function BusPage_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function BusPage_Conditional_23_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeConfirm()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "section", 27)(2, "div", 28);
    i0.ɵɵtext(3, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "Confirmer la suppression");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Cette action supprimera definitivement cet element.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 29)(9, "button", 5);
    i0.ɵɵlistener("click", function BusPage_Conditional_23_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeConfirm()); });
    i0.ɵɵtext(10, "Annuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 30);
    i0.ɵɵlistener("click", function BusPage_Conditional_23_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.confirmRemove()); });
    i0.ɵɵtext(12, "Supprimer");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("disabled", ctx_r0.loading);
} }
function BusPage_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵlistener("click", function BusPage_Conditional_24_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeSuccess()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "section", 32)(2, "div", 33);
    i0.ɵɵtext(3, "OK");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "Operation reussie");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 29)(9, "button", 1);
    i0.ɵɵlistener("click", function BusPage_Conditional_24_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeSuccess()); });
    i0.ɵɵtext(10, "Continuer");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.successMessage);
} }
export class BusPage {
    service;
    cdr;
    items = [];
    form = this.emptyForm();
    editingId = null;
    loading = false;
    error = '';
    formOpen = false;
    confirmOpen = false;
    successOpen = false;
    successMessage = '';
    pendingDelete = null;
    constructor(service, cdr) {
        this.service = service;
        this.cdr = cdr;
    }
    ngOnInit() {
        void this.load();
    }
    refresh() {
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    async load() {
        this.loading = true;
        this.error = '';
        this.refresh();
        try {
            this.items = await this.service.list();
        }
        catch (error) {
            this.error = error instanceof Error ? error.message : 'Chargement impossible.';
        }
        finally {
            this.loading = false;
            this.refresh();
        }
    }
    openCreate() {
        this.editingId = null;
        this.form = this.emptyForm();
        this.error = '';
        this.formOpen = true;
        this.refresh();
    }
    edit(item) {
        this.editingId = item.idBus;
        this.form = { ...item };
        this.error = '';
        this.formOpen = true;
        this.refresh();
    }
    cancel() {
        this.editingId = null;
        this.form = this.emptyForm();
        this.formOpen = false;
        this.refresh();
    }
    async save() {
        this.loading = true;
        this.error = '';
        this.refresh();
        try {
            if (this.editingId === null) {
                await this.service.create(this.form);
                this.successMessage = 'Element cree avec succes.';
            }
            else {
                await this.service.update(this.editingId, this.form);
                this.successMessage = 'Element modifie avec succes.';
            }
            this.cancel();
            await this.load();
            this.successOpen = true;
        }
        catch (error) {
            this.error = error instanceof Error ? error.message : 'Enregistrement impossible.';
        }
        finally {
            this.loading = false;
            this.refresh();
        }
    }
    askRemove(item) {
        this.pendingDelete = item;
        this.confirmOpen = true;
        this.error = '';
        this.refresh();
    }
    closeConfirm() {
        this.pendingDelete = null;
        this.confirmOpen = false;
        this.refresh();
    }
    closeSuccess() {
        this.successOpen = false;
        this.successMessage = '';
        this.refresh();
    }
    async confirmRemove() {
        if (!this.pendingDelete) {
            return;
        }
        this.loading = true;
        this.error = '';
        this.refresh();
        try {
            await this.service.remove(this.pendingDelete.idBus);
            this.closeConfirm();
            await this.load();
            this.successMessage = 'Element supprime avec succes.';
            this.successOpen = true;
        }
        catch (error) {
            this.error = error instanceof Error ? error.message : 'Suppression impossible.';
        }
        finally {
            this.loading = false;
            this.refresh();
        }
    }
    emptyForm() {
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
    static ɵfac = function BusPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BusPage)(i0.ɵɵdirectiveInject(i1.BusService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BusPage, selectors: [["app-bus"]], decls: 25, vars: 6, consts: [[1, "page-title"], ["type", "button", 3, "click"], [1, "error"], [1, "table-card"], [1, "table-head"], ["type", "button", 1, "ghost", 3, "click"], [1, "loading-state"], [1, "table-scroll"], [1, "row-actions"], ["type", "button", 1, "danger", 3, "click"], ["role", "presentation", 1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Formulaire Bus", 1, "modal-panel"], [1, "modal-head"], ["type", "button", "aria-label", "Fermer", 1, "icon-button", 3, "click"], [3, "ngSubmit"], ["name", "idConducteur", "type", "text", 3, "ngModelChange", "ngModel"], ["name", "idReceveur", "type", "text", 3, "ngModelChange", "ngModel"], ["name", "numeroBus", "type", "text", 3, "ngModelChange", "ngModel"], ["name", "immatriculation", "type", "text", 3, "ngModelChange", "ngModel"], ["name", "marque", "type", "text", 3, "ngModelChange", "ngModel"], ["name", "modele", "type", "text", 3, "ngModelChange", "ngModel"], ["name", "capaciteMax", "type", "number", 3, "ngModelChange", "ngModel"], ["name", "etatBus", "type", "text", 3, "ngModelChange", "ngModel"], ["name", "actif", "type", "text", 3, "ngModelChange", "ngModel"], ["name", "createdAt", "type", "datetime-local", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "submit", 3, "disabled"], ["role", "dialog", "aria-modal", "true", "aria-label", "Confirmation suppression", 1, "modal-panel", "small"], [1, "confirm-icon", "danger-icon"], [1, "modal-actions"], ["type", "button", 1, "danger", 3, "click", "disabled"], ["role", "presentation", 1, "modal-backdrop", "success-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Succes", 1, "modal-panel", "small", "success-panel"], [1, "confirm-icon", "success-icon"]], template: function BusPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div")(2, "p");
            i0.ɵɵtext(3, "Module CRUD");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "h1");
            i0.ɵɵtext(5, "Bus");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7, "Gestion de la table bus");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 1);
            i0.ɵɵlistener("click", function BusPage_Template_button_click_8_listener() { return ctx.openCreate(); });
            i0.ɵɵtext(9, "Nouvel element");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(10, BusPage_Conditional_10_Template, 2, 1, "div", 2);
            i0.ɵɵelementStart(11, "section", 3)(12, "div", 4)(13, "div")(14, "h2");
            i0.ɵɵtext(15, "Donnees");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "button", 5);
            i0.ɵɵlistener("click", function BusPage_Template_button_click_18_listener() { return ctx.load(); });
            i0.ɵɵtext(19, "Actualiser");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(20, BusPage_Conditional_20_Template, 2, 0, "div", 6)(21, BusPage_Conditional_21_Template, 25, 0, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(22, BusPage_Conditional_22_Template, 46, 14);
            i0.ɵɵconditionalCreate(23, BusPage_Conditional_23_Template, 13, 1);
            i0.ɵɵconditionalCreate(24, BusPage_Conditional_24_Template, 11, 1);
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵconditional(ctx.error ? 10 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.items.length, " element(s)");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.loading ? 20 : 21);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.formOpen ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.confirmOpen ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.successOpen ? 24 : -1);
        } }, dependencies: [CommonModule, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, i2.NgForm], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BusPage, [{
        type: Component,
        args: [{ selector: 'app-bus', standalone: true, imports: [CommonModule, FormsModule], template: "<section class=\"page-title\">\n  <div>\n    <p>Module CRUD</p>\n    <h1>Bus</h1>\n    <span>Gestion de la table bus</span>\n  </div>\n  <button type=\"button\" (click)=\"openCreate()\">Nouvel element</button>\n</section>\n\n@if (error) {\n  <div class=\"error\">{{ error }}</div>\n}\n\n<section class=\"table-card\">\n  <div class=\"table-head\">\n    <div>\n      <h2>Donnees</h2>\n      <p>{{ items.length }} element(s)</p>\n    </div>\n    <button type=\"button\" class=\"ghost\" (click)=\"load()\">Actualiser</button>\n  </div>\n  @if (loading) {\n    <div class=\"loading-state\">Chargement...</div>\n  } @else {\n    <div class=\"table-scroll\">\n      <table>\n        <thead>\n          <tr>\n          <th>Numero Bus</th>\n          <th>Immatriculation</th>\n          <th>Marque</th>\n          <th>Modele</th>\n          <th>Capacite Max</th>\n          <th>Etat Bus</th>\n          <th>Actif</th>\n          <th>Created At</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of items; track item.idBus) {\n            <tr>\n          <td>{{ item.numeroBus }}</td>\n          <td>{{ item.immatriculation }}</td>\n          <td>{{ item.marque }}</td>\n          <td>{{ item.modele }}</td>\n          <td>{{ item.capaciteMax }}</td>\n          <td>{{ item.etatBus }}</td>\n          <td>{{ item.actif }}</td>\n          <td>{{ item.createdAt }}</td>\n              <td class=\"row-actions\">\n                <button type=\"button\" (click)=\"edit(item)\">Editer</button>\n                <button type=\"button\" class=\"danger\" (click)=\"askRemove(item)\">Supprimer</button>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  }\n</section>\n\n@if (formOpen) {\n  <div class=\"modal-backdrop\" role=\"presentation\" (click)=\"cancel()\"></div>\n  <section class=\"modal-panel\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Formulaire Bus\">\n    <div class=\"modal-head\">\n      <div>\n        <p>{{ editingId === null ? 'Creation' : 'Modification' }}</p>\n        <h2>{{ editingId === null ? 'Nouvel element' : 'Modifier element' }}</h2>\n      </div>\n      <button type=\"button\" class=\"icon-button\" aria-label=\"Fermer\" (click)=\"cancel()\">x</button>\n    </div>\n\n    <form (ngSubmit)=\"save()\">\n\n      <label>\n        Id Conducteur\n        <input name=\"idConducteur\" type=\"text\" [(ngModel)]=\"form['idConducteur']\">\n      </label>\n\n      <label>\n        Id Receveur\n        <input name=\"idReceveur\" type=\"text\" [(ngModel)]=\"form['idReceveur']\">\n      </label>\n\n      <label>\n        Numero Bus\n        <input name=\"numeroBus\" type=\"text\" [(ngModel)]=\"form['numeroBus']\">\n      </label>\n\n      <label>\n        Immatriculation\n        <input name=\"immatriculation\" type=\"text\" [(ngModel)]=\"form['immatriculation']\">\n      </label>\n\n      <label>\n        Marque\n        <input name=\"marque\" type=\"text\" [(ngModel)]=\"form['marque']\">\n      </label>\n\n      <label>\n        Modele\n        <input name=\"modele\" type=\"text\" [(ngModel)]=\"form['modele']\">\n      </label>\n\n      <label>\n        Capacite Max\n        <input name=\"capaciteMax\" type=\"number\" [(ngModel)]=\"form['capaciteMax']\">\n      </label>\n\n      <label>\n        Etat Bus\n        <input name=\"etatBus\" type=\"text\" [(ngModel)]=\"form['etatBus']\">\n      </label>\n\n      <label>\n        Actif\n        <input name=\"actif\" type=\"text\" [(ngModel)]=\"form['actif']\">\n      </label>\n\n      <label>\n        Created At\n        <input name=\"createdAt\" type=\"datetime-local\" [(ngModel)]=\"form['createdAt']\">\n      </label>\n      <div class=\"form-actions\">\n        <button type=\"submit\" [disabled]=\"loading\">{{ editingId === null ? 'Creer' : 'Mettre a jour' }}</button>\n        <button type=\"button\" class=\"ghost\" (click)=\"cancel()\">Annuler</button>\n      </div>\n    </form>\n  </section>\n}\n\n@if (confirmOpen) {\n  <div class=\"modal-backdrop\" role=\"presentation\" (click)=\"closeConfirm()\"></div>\n  <section class=\"modal-panel small\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Confirmation suppression\">\n    <div class=\"confirm-icon danger-icon\">!</div>\n    <h2>Confirmer la suppression</h2>\n    <p>Cette action supprimera definitivement cet element.</p>\n    <div class=\"modal-actions\">\n      <button type=\"button\" class=\"ghost\" (click)=\"closeConfirm()\">Annuler</button>\n      <button type=\"button\" class=\"danger\" [disabled]=\"loading\" (click)=\"confirmRemove()\">Supprimer</button>\n    </div>\n  </section>\n}\n\n@if (successOpen) {\n  <div class=\"modal-backdrop success-backdrop\" role=\"presentation\" (click)=\"closeSuccess()\"></div>\n  <section class=\"modal-panel small success-panel\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Succes\">\n    <div class=\"confirm-icon success-icon\">OK</div>\n    <h2>Operation reussie</h2>\n    <p>{{ successMessage }}</p>\n    <div class=\"modal-actions\">\n      <button type=\"button\" (click)=\"closeSuccess()\">Continuer</button>\n    </div>\n  </section>\n}\n" }]
    }], () => [{ type: i1.BusService }, { type: i0.ChangeDetectorRef }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BusPage, { className: "BusPage", filePath: "src/app/pages/bus/bus.page.ts", lineNumber: 14 }); })();
