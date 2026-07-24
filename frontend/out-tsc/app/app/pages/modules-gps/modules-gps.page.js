import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusService } from '../bus/bus.service';
import { ModulesGpsService } from './modules-gps.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.identifiantModule;
const _forTrack1 = ($index, $item) => $item.idBus;
const _forTrack2 = ($index, $item) => $item.idModule;
function ModulesGpsPage_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const gps_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", gps_r1.identifiantModule);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", gps_r1.identifiantModule, " \u00B7 ", gps_r1.portSerie);
} }
function ModulesGpsPage_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r1.form.controls.identifiantModule.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.form.controls.identifiantModule.value, " \u00B7 hors ligne");
} }
function ModulesGpsPage_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1, "Aucun GPS connect\u00E9 d\u00E9tect\u00E9. V\u00E9rifiez le port s\u00E9rie et red\u00E9marrez le backend.");
    i0.ɵɵelementEnd();
} }
function ModulesGpsPage_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bus_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", bus_r3.idBus);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", bus_r3.numeroBus, " \u00B7 ", bus_r3.immatriculation);
} }
function ModulesGpsPage_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function ModulesGpsPage_Conditional_40_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancel()); });
    i0.ɵɵtext(1, "Annuler");
    i0.ɵɵelementEnd();
} }
function ModulesGpsPage_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function ModulesGpsPage_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.success());
} }
function ModulesGpsPage_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, "Aucun module GPS enregistr\u00E9.");
    i0.ɵɵelementEnd();
} }
function ModulesGpsPage_For_51_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article");
    i0.ɵɵelement(1, "span", 19);
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "b");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 18);
    i0.ɵɵlistener("click", function ModulesGpsPage_For_51_Template_button_click_11_listener() { const module_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.edit(module_r6)); });
    i0.ɵɵtext(12, "Modifier");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 20);
    i0.ɵɵlistener("click", function ModulesGpsPage_For_51_Template_button_click_13_listener() { const module_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.remove(module_r6)); });
    i0.ɵɵtext(14, "Supprimer");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const module_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("offline", !module_r6.actif);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(module_r6.nomModule);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(module_r6.identifiantModule);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(module_r6.numeroBus ? module_r6.numeroBus + " \u00B7 " + module_r6.immatriculation : "Non affect\u00E9");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(module_r6.numeroLigne ? "Ligne " + module_r6.numeroLigne + " \u00B7 " + module_r6.nomLigne : "Ligne non affect\u00E9e");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
} }
export class ModulesGpsPage {
    service = inject(ModulesGpsService);
    busService = inject(BusService);
    modules = signal([], ...(ngDevMode ? [{ debugName: "modules" }] : /* istanbul ignore next */ []));
    buses = signal([], ...(ngDevMode ? [{ debugName: "buses" }] : /* istanbul ignore next */ []));
    connectedModules = signal([], ...(ngDevMode ? [{ debugName: "connectedModules" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    success = signal('', ...(ngDevMode ? [{ debugName: "success" }] : /* istanbul ignore next */ []));
    form = new FormGroup({
        identifiantModule: new FormControl('', { nonNullable: true, validators: Validators.required }),
        nomModule: new FormControl('', { nonNullable: true, validators: Validators.required }),
        idBus: new FormControl('', { nonNullable: true, validators: Validators.required }),
        actif: new FormControl(true, { nonNullable: true })
    });
    ngOnInit() {
        void this.load();
    }
    edit(module) {
        this.editingId.set(module.idModule);
        this.form.setValue({ identifiantModule: module.identifiantModule, nomModule: module.nomModule, idBus: module.idBus ?? '', actif: module.actif });
        this.error.set('');
        this.success.set('');
    }
    cancel() {
        this.editingId.set(null);
        this.form.reset({ identifiantModule: '', nomModule: '', idBus: '', actif: true });
    }
    async save() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            return;
        }
        this.loading.set(true);
        this.error.set('');
        try {
            await this.service.save(this.editingId(), this.form.getRawValue());
            this.success.set(this.editingId() ? 'Module GPS modifié.' : 'Module GPS ajouté.');
            this.cancel();
            await this.load();
        }
        catch (error) {
            this.error.set(error instanceof Error ? error.message : 'Enregistrement impossible.');
        }
        finally {
            this.loading.set(false);
        }
    }
    async remove(module) {
        this.loading.set(true);
        this.error.set('');
        try {
            await this.service.remove(module.idModule);
            this.success.set(`Module ${module.nomModule} supprimé.`);
            await this.load();
        }
        catch (error) {
            this.error.set(error instanceof Error ? error.message : 'Suppression impossible.');
        }
        finally {
            this.loading.set(false);
        }
    }
    async load() {
        this.loading.set(true);
        try {
            const [modules, buses, connectedModules] = await Promise.all([this.service.list(), this.busService.list(), this.service.connected()]);
            this.modules.set(modules);
            this.buses.set(buses.filter(({ actif }) => actif));
            this.connectedModules.set(connectedModules);
            if (!this.editingId() && !this.form.controls.identifiantModule.value && connectedModules.length) {
                this.form.controls.identifiantModule.setValue(connectedModules[0].identifiantModule);
                this.form.controls.nomModule.setValue(`GPS ${connectedModules[0].identifiantModule}`);
            }
        }
        catch (error) {
            this.error.set(error instanceof Error ? error.message : 'Chargement impossible.');
        }
        finally {
            this.loading.set(false);
        }
    }
    static ɵfac = function ModulesGpsPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ModulesGpsPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModulesGpsPage, selectors: [["app-modules-gps"]], decls: 52, vars: 11, consts: [[1, "gps-head"], [1, "gps-layout"], [3, "ngSubmit", "formGroup"], ["formControlName", "identifiantModule"], ["value", ""], [3, "value"], [1, "gps-warning"], ["formControlName", "nomModule", "placeholder", "Ex. GPS principal BUS-001"], ["formControlName", "idBus"], [1, "check"], ["type", "checkbox", "formControlName", "actif"], [1, "actions"], ["type", "submit", 3, "disabled"], ["type", "button", 1, "secondary"], ["role", "alert", 1, "form-error"], ["role", "status", 1, "form-success"], [1, "module-list"], [1, "empty"], ["type", "button", 1, "secondary", 3, "click"], [1, "gps-status"], ["type", "button", 1, "danger", 3, "click", "disabled"]], template: function ModulesGpsPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "p");
            i0.ɵɵtext(2, "Param\u00E8tres mat\u00E9riels");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h1");
            i0.ɵɵtext(4, "Modules GPS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Ajoutez un bo\u00EEtier GPS et affectez-le \u00E0 un v\u00E9hicule actif.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "section", 1)(8, "form", 2);
            i0.ɵɵlistener("ngSubmit", function ModulesGpsPage_Template_form_ngSubmit_8_listener() { return ctx.save(); });
            i0.ɵɵelementStart(9, "div")(10, "p");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "h2");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "label");
            i0.ɵɵtext(15, "GPS connect\u00E9");
            i0.ɵɵelementStart(16, "select", 3)(17, "option", 4);
            i0.ɵɵtext(18, "S\u00E9lectionner un GPS d\u00E9tect\u00E9");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(19, ModulesGpsPage_For_20_Template, 2, 3, "option", 5, _forTrack0);
            i0.ɵɵconditionalCreate(21, ModulesGpsPage_Conditional_21_Template, 2, 2, "option", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(22, ModulesGpsPage_Conditional_22_Template, 2, 0, "p", 6);
            i0.ɵɵelementStart(23, "label");
            i0.ɵɵtext(24, "Nom du module");
            i0.ɵɵelement(25, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "label");
            i0.ɵɵtext(27, "Bus affect\u00E9");
            i0.ɵɵelementStart(28, "select", 8)(29, "option", 4);
            i0.ɵɵtext(30, "Non affect\u00E9");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(31, ModulesGpsPage_For_32_Template, 2, 3, "option", 5, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "label", 9);
            i0.ɵɵelement(34, "input", 10);
            i0.ɵɵelementStart(35, "span");
            i0.ɵɵtext(36, "Module actif");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 11)(38, "button", 12);
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(40, ModulesGpsPage_Conditional_40_Template, 2, 0, "button", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(41, ModulesGpsPage_Conditional_41_Template, 2, 1, "p", 14);
            i0.ɵɵconditionalCreate(42, ModulesGpsPage_Conditional_42_Template, 2, 1, "p", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "section", 16)(44, "div")(45, "p");
            i0.ɵɵtext(46, "Parc GPS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "h2");
            i0.ɵɵtext(48, "Modules enregistr\u00E9s");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(49, ModulesGpsPage_Conditional_49_Template, 2, 0, "div", 17);
            i0.ɵɵrepeaterCreate(50, ModulesGpsPage_For_51_Template, 15, 7, "article", null, _forTrack2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.editingId() ? "Modification" : "Nouveau module");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.editingId() ? "Modifier le GPS" : "Ajouter un GPS");
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.connectedModules());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.editingId() && !ctx.connectedModules().length ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.connectedModules().length ? 22 : -1);
            i0.ɵɵadvance(9);
            i0.ɵɵrepeater(ctx.buses());
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("disabled", ctx.loading() || ctx.form.invalid);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.editingId() ? "Enregistrer" : "Ajouter et affecter");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.editingId() ? 40 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 41 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.success() ? 42 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(!ctx.modules().length && !ctx.loading() ? 49 : -1);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.modules());
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: [".gps-head[_ngcontent-%COMP%], .gps-layout[_ngcontent-%COMP%] > form[_ngcontent-%COMP%], .module-list[_ngcontent-%COMP%]{border:1px solid #dce8e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a0d}.gps-head[_ngcontent-%COMP%]{padding:25px;margin-bottom:18px;background:linear-gradient(135deg,#e7faf7,#fff)}.gps-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .gps-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .gps-layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .gps-layout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.gps-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .gps-layout[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .module-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#087d76;font-size:.72rem;font-weight:900;text-transform:uppercase}.gps-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:5px 0}.gps-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#64748b}.gps-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(320px,.7fr) minmax(480px,1.3fr);gap:18px}.gps-layout[_ngcontent-%COMP%] > form[_ngcontent-%COMP%], .module-list[_ngcontent-%COMP%]{padding:20px}.gps-layout[_ngcontent-%COMP%] > form[_ngcontent-%COMP%]{display:grid;align-self:start;gap:15px}.gps-layout[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:grid;gap:7px;color:#284c4f;font-size:.78rem;font-weight:850}.gps-layout[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not([type=checkbox]), .gps-layout[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;height:46px;padding:0 12px;border:1px solid #cfdfde;border-radius:10px;background:#f8fbfb}.check[_ngcontent-%COMP%]{display:flex!important;align-items:center;gap:9px}.check[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:17px;height:17px}.actions[_ngcontent-%COMP%]{display:flex;gap:8px}.form-error[_ngcontent-%COMP%], .form-success[_ngcontent-%COMP%]{padding:10px!important;border-radius:8px;font-size:.78rem!important}.form-error[_ngcontent-%COMP%]{background:#fee2e2;color:#991b1b!important}.form-success[_ngcontent-%COMP%]{background:#dcfce7;color:#166534!important}.module-list[_ngcontent-%COMP%]{display:grid;align-content:start;gap:10px}.module-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;align-items:center;gap:10px;padding:12px;border:1px solid #e5eeee;border-radius:11px;background:#f8fbfb}.module-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .module-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .module-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block}.module-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:2px;color:#64748b}.module-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{margin-top:5px;color:#087d76;font-size:.72rem}.gps-status[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;background:#10b981;box-shadow:0 0 0 5px #10b98118}.gps-status.offline[_ngcontent-%COMP%]{background:#94a3b8;box-shadow:none}.empty[_ngcontent-%COMP%]{padding:40px;text-align:center;color:#64748b}@media(max-width:950px){.gps-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media(max-width:600px){.module-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{grid-template-columns:auto 1fr}.module-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{grid-column:auto}.gps-head[_ngcontent-%COMP%]{padding:20px}}", ".gps-warning[_ngcontent-%COMP%]{padding:10px 12px!important;border:1px solid #fde68a;border-radius:9px;background:#fffbeb;color:#92400e!important;font-size:.76rem!important;line-height:1.45}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModulesGpsPage, [{
        type: Component,
        args: [{ selector: 'app-modules-gps', standalone: true, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"gps-head\"><p>Param\u00E8tres mat\u00E9riels</p><h1>Modules GPS</h1><span>Ajoutez un bo\u00EEtier GPS et affectez-le \u00E0 un v\u00E9hicule actif.</span></header>\n\n<section class=\"gps-layout\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <div><p>{{ editingId() ? 'Modification' : 'Nouveau module' }}</p><h2>{{ editingId() ? 'Modifier le GPS' : 'Ajouter un GPS' }}</h2></div>\n    <label>GPS connect\u00E9<select formControlName=\"identifiantModule\"><option value=\"\">S\u00E9lectionner un GPS d\u00E9tect\u00E9</option>@for(gps of connectedModules();track gps.identifiantModule){<option [value]=\"gps.identifiantModule\">{{gps.identifiantModule}} \u00B7 {{gps.portSerie}}</option>}@if(editingId() && !connectedModules().length){<option [value]=\"form.controls.identifiantModule.value\">{{form.controls.identifiantModule.value}} \u00B7 hors ligne</option>}</select></label>\n    @if(!connectedModules().length){<p class=\"gps-warning\">Aucun GPS connect\u00E9 d\u00E9tect\u00E9. V\u00E9rifiez le port s\u00E9rie et red\u00E9marrez le backend.</p>}\n    <label>Nom du module<input formControlName=\"nomModule\" placeholder=\"Ex. GPS principal BUS-001\"></label>\n    <label>Bus affect\u00E9<select formControlName=\"idBus\"><option value=\"\">Non affect\u00E9</option>@for(bus of buses();track bus.idBus){<option [value]=\"bus.idBus\">{{bus.numeroBus}} \u00B7 {{bus.immatriculation}}</option>}</select></label>\n    <label class=\"check\"><input type=\"checkbox\" formControlName=\"actif\"><span>Module actif</span></label>\n    <div class=\"actions\"><button type=\"submit\" [disabled]=\"loading() || form.invalid\">{{ editingId() ? 'Enregistrer' : 'Ajouter et affecter' }}</button>@if(editingId()){<button type=\"button\" class=\"secondary\" (click)=\"cancel()\">Annuler</button>}</div>\n    @if(error()){<p class=\"form-error\" role=\"alert\">{{error()}}</p>}@if(success()){<p class=\"form-success\" role=\"status\">{{success()}}</p>}\n  </form>\n\n  <section class=\"module-list\"><div><p>Parc GPS</p><h2>Modules enregistr\u00E9s</h2></div>@if(!modules().length&&!loading()){<div class=\"empty\">Aucun module GPS enregistr\u00E9.</div>}@for(module of modules();track module.idModule){<article><span class=\"gps-status\" [class.offline]=\"!module.actif\"></span><div><strong>{{module.nomModule}}</strong><small>{{module.identifiantModule}}</small><b>{{module.numeroBus ? module.numeroBus + ' \u00B7 ' + module.immatriculation : 'Non affect\u00E9'}}</b><small>{{module.numeroLigne ? 'Ligne ' + module.numeroLigne + ' \u00B7 ' + module.nomLigne : 'Ligne non affect\u00E9e'}}</small></div><button type=\"button\" class=\"secondary\" (click)=\"edit(module)\">Modifier</button><button type=\"button\" class=\"danger\" (click)=\"remove(module)\" [disabled]=\"loading()\">Supprimer</button></article>}</section>\n</section>\n", styles: [".gps-head,.gps-layout>form,.module-list{border:1px solid #dce8e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a0d}.gps-head{padding:25px;margin-bottom:18px;background:linear-gradient(135deg,#e7faf7,#fff)}.gps-head p,.gps-head h1,.gps-layout h2,.gps-layout p{margin:0}.gps-head p,.gps-layout>form>div p,.module-list>div p{color:#087d76;font-size:.72rem;font-weight:900;text-transform:uppercase}.gps-head h1{margin:5px 0}.gps-head span{color:#64748b}.gps-layout{display:grid;grid-template-columns:minmax(320px,.7fr) minmax(480px,1.3fr);gap:18px}.gps-layout>form,.module-list{padding:20px}.gps-layout>form{display:grid;align-self:start;gap:15px}.gps-layout label{display:grid;gap:7px;color:#284c4f;font-size:.78rem;font-weight:850}.gps-layout input:not([type=checkbox]),.gps-layout select{width:100%;height:46px;padding:0 12px;border:1px solid #cfdfde;border-radius:10px;background:#f8fbfb}.check{display:flex!important;align-items:center;gap:9px}.check input{width:17px;height:17px}.actions{display:flex;gap:8px}.form-error,.form-success{padding:10px!important;border-radius:8px;font-size:.78rem!important}.form-error{background:#fee2e2;color:#991b1b!important}.form-success{background:#dcfce7;color:#166534!important}.module-list{display:grid;align-content:start;gap:10px}.module-list article{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;align-items:center;gap:10px;padding:12px;border:1px solid #e5eeee;border-radius:11px;background:#f8fbfb}.module-list strong,.module-list small,.module-list b{display:block}.module-list small{margin-top:2px;color:#64748b}.module-list b{margin-top:5px;color:#087d76;font-size:.72rem}.gps-status{width:10px;height:10px;border-radius:50%;background:#10b981;box-shadow:0 0 0 5px #10b98118}.gps-status.offline{background:#94a3b8;box-shadow:none}.empty{padding:40px;text-align:center;color:#64748b}@media(max-width:950px){.gps-layout{grid-template-columns:1fr}}@media(max-width:600px){.module-list article{grid-template-columns:auto 1fr}.module-list article button{grid-column:auto}.gps-head{padding:20px}}\n", ".gps-warning{padding:10px 12px!important;border:1px solid #fde68a;border-radius:9px;background:#fffbeb;color:#92400e!important;font-size:.76rem!important;line-height:1.45}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModulesGpsPage, { className: "ModulesGpsPage", filePath: "src/app/pages/modules-gps/modules-gps.page.ts", lineNumber: 16 }); })();
