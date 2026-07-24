import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BusService } from '../bus/bus.service';
import { LignesService } from '../lignes/lignes.service';
import { TrajetsService } from '../trajets/trajets.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.idBus;
const _forTrack1 = ($index, $item) => $item.idLigne;
const _forTrack2 = ($index, $item) => $item.idTrajet;
function AffectationsLignesPage_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bus_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", bus_r1.idBus);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", bus_r1.numeroBus, " \u00B7 ", bus_r1.immatriculation);
} }
function AffectationsLignesPage_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ligne_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", ligne_r2.idLigne);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ligne_r2.numeroLigne, " \u00B7 ", ligne_r2.nomLigne);
} }
function AffectationsLignesPage_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.error());
} }
function AffectationsLignesPage_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.success());
} }
function AffectationsLignesPage_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, "Aucune affectation active.");
    i0.ɵɵelementEnd();
} }
function AffectationsLignesPage_For_40_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 12);
    i0.ɵɵlistener("click", function AffectationsLignesPage_For_40_Template_button_click_10_listener() { const assignment_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectAssignment(assignment_r5)); });
    i0.ɵɵtext(11, "Changer");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const assignment_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(assignment_r5.numeroLigne);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", assignment_r5.numeroBus, " \u00B7 ", assignment_r5.immatriculation);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(assignment_r5.nomLigne);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Depuis ", assignment_r5.dateDepart);
} }
export class AffectationsLignesPage {
    busService = inject(BusService);
    lignesService = inject(LignesService);
    trajetsService = inject(TrajetsService);
    buses = signal([], ...(ngDevMode ? [{ debugName: "buses" }] : /* istanbul ignore next */ []));
    lignes = signal([], ...(ngDevMode ? [{ debugName: "lignes" }] : /* istanbul ignore next */ []));
    assignments = signal([], ...(ngDevMode ? [{ debugName: "assignments" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    success = signal('', ...(ngDevMode ? [{ debugName: "success" }] : /* istanbul ignore next */ []));
    form = new FormGroup({
        idBus: new FormControl('', { nonNullable: true, validators: Validators.required }),
        idLigne: new FormControl('', { nonNullable: true, validators: Validators.required })
    });
    ngOnInit() { void this.load(); }
    selectAssignment(assignment) {
        this.form.setValue({ idBus: assignment.idBus, idLigne: assignment.idLigne });
        this.error.set('');
        this.success.set('');
    }
    async assign() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            return;
        }
        this.loading.set(true);
        this.error.set('');
        try {
            const { idBus, idLigne } = this.form.getRawValue();
            await this.trajetsService.assign(idBus, idLigne);
            this.success.set('Le bus a été affecté à la ligne. La carte sera actualisée automatiquement.');
            await this.load();
        }
        catch (error) {
            this.error.set(error instanceof Error ? error.message : 'Affectation impossible.');
        }
        finally {
            this.loading.set(false);
        }
    }
    async load() {
        this.loading.set(true);
        try {
            const [buses, lignes, assignments] = await Promise.all([this.busService.list(), this.lignesService.list(), this.trajetsService.activeAssignments()]);
            this.buses.set(buses.filter(({ actif }) => actif));
            this.lignes.set(lignes.filter(({ actif }) => actif));
            this.assignments.set(assignments);
        }
        catch (error) {
            this.error.set(error instanceof Error ? error.message : 'Chargement impossible.');
        }
        finally {
            this.loading.set(false);
        }
    }
    static ɵfac = function AffectationsLignesPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AffectationsLignesPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AffectationsLignesPage, selectors: [["app-affectations-lignes"]], decls: 41, vars: 5, consts: [[1, "assignment-head"], [1, "assignment-layout"], [3, "ngSubmit", "formGroup"], ["formControlName", "idBus"], ["value", ""], [3, "value"], ["formControlName", "idLigne"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "message", "error-message"], ["role", "status", 1, "message", "success-message"], [1, "active-list"], [1, "empty"], ["type", "button", 1, "secondary", 3, "click"]], template: function AffectationsLignesPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "p");
            i0.ɵɵtext(2, "Exploitation du r\u00E9seau");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h1");
            i0.ɵɵtext(4, "Affectation des bus aux lignes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Choisissez la ligne active de chaque v\u00E9hicule ind\u00E9pendamment de son module GPS.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "section", 1)(8, "form", 2);
            i0.ɵɵlistener("ngSubmit", function AffectationsLignesPage_Template_form_ngSubmit_8_listener() { return ctx.assign(); });
            i0.ɵɵelementStart(9, "div")(10, "p");
            i0.ɵɵtext(11, "Nouvelle affectation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "h2");
            i0.ɵɵtext(13, "Bus et ligne active");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "label");
            i0.ɵɵtext(15, "V\u00E9hicule");
            i0.ɵɵelementStart(16, "select", 3)(17, "option", 4);
            i0.ɵɵtext(18, "S\u00E9lectionner un bus");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(19, AffectationsLignesPage_For_20_Template, 2, 3, "option", 5, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "label");
            i0.ɵɵtext(22, "Ligne");
            i0.ɵɵelementStart(23, "select", 6)(24, "option", 4);
            i0.ɵɵtext(25, "S\u00E9lectionner une ligne");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(26, AffectationsLignesPage_For_27_Template, 2, 3, "option", 5, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "button", 7);
            i0.ɵɵtext(29, "Affecter le bus");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(30, AffectationsLignesPage_Conditional_30_Template, 2, 1, "p", 8);
            i0.ɵɵconditionalCreate(31, AffectationsLignesPage_Conditional_31_Template, 2, 1, "p", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "section", 10)(33, "div")(34, "p");
            i0.ɵɵtext(35, "Affectations actives");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "h2");
            i0.ɵɵtext(37, "Bus actuellement en ligne");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(38, AffectationsLignesPage_Conditional_38_Template, 2, 0, "div", 11);
            i0.ɵɵrepeaterCreate(39, AffectationsLignesPage_For_40_Template, 12, 5, "article", null, _forTrack2);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(11);
            i0.ɵɵrepeater(ctx.buses());
            i0.ɵɵadvance(7);
            i0.ɵɵrepeater(ctx.lignes());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading() || ctx.form.invalid);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.error() ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.success() ? 31 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(!ctx.assignments().length && !ctx.loading() ? 38 : -1);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.assignments());
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName], styles: [".assignment-head[_ngcontent-%COMP%], .assignment-layout[_ngcontent-%COMP%] > form[_ngcontent-%COMP%], .active-list[_ngcontent-%COMP%]{border:1px solid #dce8e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a0d}.assignment-head[_ngcontent-%COMP%]{padding:25px;margin-bottom:18px;background:linear-gradient(135deg,#e7faf7,#fff)}.assignment-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .assignment-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .assignment-layout[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .assignment-layout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.assignment-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .assignment-layout[_ngcontent-%COMP%] > form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .active-list[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#087d76;font-size:.72rem;font-weight:900;text-transform:uppercase}.assignment-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:5px 0}.assignment-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#64748b}.assignment-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(320px,.7fr) minmax(480px,1.3fr);gap:18px}.assignment-layout[_ngcontent-%COMP%] > form[_ngcontent-%COMP%], .active-list[_ngcontent-%COMP%]{display:grid;align-self:start;gap:15px;padding:20px}.assignment-layout[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:grid;gap:7px;color:#284c4f;font-size:.78rem;font-weight:850}.assignment-layout[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;height:46px;padding:0 12px;border:1px solid #cfdfde;border-radius:10px;background:#f8fbfb}.message[_ngcontent-%COMP%]{padding:10px!important;border-radius:9px;font-size:.78rem!important}.error-message[_ngcontent-%COMP%]{background:#fee2e2;color:#991b1b!important}.success-message[_ngcontent-%COMP%]{background:#dcfce7;color:#166534!important}.active-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;padding:12px;border:1px solid #e5eeee;border-radius:11px;background:#f8fbfb}.active-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;min-width:48px;height:40px;padding:0 8px;place-items:center;border-radius:9px;background:#dff7f4;color:#087d76;font-weight:900}.active-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .active-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .active-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:block}.active-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:3px;color:#64748b}.active-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{margin-top:5px;color:#819294;font-size:.65rem}.empty[_ngcontent-%COMP%]{padding:40px;text-align:center;color:#64748b}@media(max-width:900px){.assignment-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AffectationsLignesPage, [{
        type: Component,
        args: [{ selector: 'app-affectations-lignes', standalone: true, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"assignment-head\"><p>Exploitation du r\u00E9seau</p><h1>Affectation des bus aux lignes</h1><span>Choisissez la ligne active de chaque v\u00E9hicule ind\u00E9pendamment de son module GPS.</span></header>\n<section class=\"assignment-layout\">\n  <form [formGroup]=\"form\" (ngSubmit)=\"assign()\">\n    <div><p>Nouvelle affectation</p><h2>Bus et ligne active</h2></div>\n    <label>V\u00E9hicule<select formControlName=\"idBus\"><option value=\"\">S\u00E9lectionner un bus</option>@for(bus of buses();track bus.idBus){<option [value]=\"bus.idBus\">{{bus.numeroBus}} \u00B7 {{bus.immatriculation}}</option>}</select></label>\n    <label>Ligne<select formControlName=\"idLigne\"><option value=\"\">S\u00E9lectionner une ligne</option>@for(ligne of lignes();track ligne.idLigne){<option [value]=\"ligne.idLigne\">{{ligne.numeroLigne}} \u00B7 {{ligne.nomLigne}}</option>}</select></label>\n    <button type=\"submit\" [disabled]=\"loading() || form.invalid\">Affecter le bus</button>\n    @if(error()){<p class=\"message error-message\" role=\"alert\">{{error()}}</p>}@if(success()){<p class=\"message success-message\" role=\"status\">{{success()}}</p>}\n  </form>\n  <section class=\"active-list\"><div><p>Affectations actives</p><h2>Bus actuellement en ligne</h2></div>@if(!assignments().length&&!loading()){<div class=\"empty\">Aucune affectation active.</div>}@for(assignment of assignments();track assignment.idTrajet){<article><span>{{assignment.numeroLigne}}</span><div><strong>{{assignment.numeroBus}} \u00B7 {{assignment.immatriculation}}</strong><small>{{assignment.nomLigne}}</small><b>Depuis {{assignment.dateDepart}}</b></div><button type=\"button\" class=\"secondary\" (click)=\"selectAssignment(assignment)\">Changer</button></article>}</section>\n</section>\n", styles: [".assignment-head,.assignment-layout>form,.active-list{border:1px solid #dce8e7;border-radius:18px;background:#fff;box-shadow:0 18px 50px #0f172a0d}.assignment-head{padding:25px;margin-bottom:18px;background:linear-gradient(135deg,#e7faf7,#fff)}.assignment-head p,.assignment-head h1,.assignment-layout h2,.assignment-layout p{margin:0}.assignment-head p,.assignment-layout>form>div p,.active-list>div p{color:#087d76;font-size:.72rem;font-weight:900;text-transform:uppercase}.assignment-head h1{margin:5px 0}.assignment-head span{color:#64748b}.assignment-layout{display:grid;grid-template-columns:minmax(320px,.7fr) minmax(480px,1.3fr);gap:18px}.assignment-layout>form,.active-list{display:grid;align-self:start;gap:15px;padding:20px}.assignment-layout label{display:grid;gap:7px;color:#284c4f;font-size:.78rem;font-weight:850}.assignment-layout select{width:100%;height:46px;padding:0 12px;border:1px solid #cfdfde;border-radius:10px;background:#f8fbfb}.message{padding:10px!important;border-radius:9px;font-size:.78rem!important}.error-message{background:#fee2e2;color:#991b1b!important}.success-message{background:#dcfce7;color:#166534!important}.active-list article{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:12px;padding:12px;border:1px solid #e5eeee;border-radius:11px;background:#f8fbfb}.active-list article>span{display:grid;min-width:48px;height:40px;padding:0 8px;place-items:center;border-radius:9px;background:#dff7f4;color:#087d76;font-weight:900}.active-list strong,.active-list small,.active-list b{display:block}.active-list small{margin-top:3px;color:#64748b}.active-list b{margin-top:5px;color:#819294;font-size:.65rem}.empty{padding:40px;text-align:center;color:#64748b}@media(max-width:900px){.assignment-layout{grid-template-columns:1fr}}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AffectationsLignesPage, { className: "AffectationsLignesPage", filePath: "src/app/pages/affectations-lignes/affectations-lignes.page.ts", lineNumber: 18 }); })();
