import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.route;
function ParametresPage_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 1)(1, "i", 2);
    i0.ɵɵtext(2, "\u2699");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9, "\u2192");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const module_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", module_r1.route);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(module_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(module_r1.description);
} }
export class ParametresPage {
    modules = [
        { name: 'Modules GPS', route: '/modules-gps', description: 'Ajouter les GPS et les affecter aux bus' },
        { name: 'Affectation bus–ligne', route: '/affectations-lignes', description: 'Définir la ligne active de chaque véhicule' },
        { name: 'Rôles et privilèges', route: '/roles', description: 'Gérer dynamiquement les droits des profils' },
        { name: 'Utilisateurs', route: '/utilisateurs', description: 'Comptes administrateurs et chauffeurs' },
        { name: "Types d’alertes", route: '/types-alertes', description: 'Configurer les catégories et seuils' },
        { name: "Statuts d’alertes", route: '/statuts-alertes', description: 'États du cycle de traitement' },
        { name: 'Stations et lignes', route: '/stations-lignes', description: 'Association et ordre des arrêts' },
        { name: 'Notifications', route: '/notifications', description: 'Canaux et règles de diffusion' },
        { name: 'Vidéosurveillance', route: '/videos-surveillance', description: 'Sources vidéo autorisées' }
    ];
    static ɵfac = function ParametresPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ParametresPage)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ParametresPage, selectors: [["app-parametres"]], decls: 10, vars: 0, consts: [[1, "settings-grid"], [3, "routerLink"], ["aria-hidden", "true"]], template: function ParametresPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header")(1, "p");
            i0.ɵɵtext(2, "Administration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h1");
            i0.ɵɵtext(4, "Param\u00E8tres");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Configuration centralis\u00E9e de la plateforme et gestion dynamique des privil\u00E8ges.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "section", 0);
            i0.ɵɵrepeaterCreate(8, ParametresPage_For_9_Template, 10, 3, "a", 1, _forTrack0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.modules);
        } }, dependencies: [RouterLink], styles: ["header[_ngcontent-%COMP%]{padding:26px;margin-bottom:18px;border-radius:18px;background:linear-gradient(135deg,#0f766e,#0d9488);color:#fff}header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:0}header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.75rem;font-weight:900;text-transform:uppercase;letter-spacing:.1em}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:6px 0;font-size:2.3rem}.settings-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.settings-grid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;padding:22px;border:1px solid #dce7e7;border-radius:16px;background:#fff;color:#0f172a;text-decoration:none;box-shadow:0 14px 40px #0f172a0d}.settings-grid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:grid;width:46px;height:46px;place-items:center;border-radius:12px;background:#ccfbf1;color:#0f766e;font-style:normal}.settings-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .settings-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block}.settings-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:5px;color:#64748b}.settings-grid[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#0f766e;font-size:1.4rem}@media(max-width:700px){.settings-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ParametresPage, [{
        type: Component,
        args: [{ selector: 'app-parametres', standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header><p>Administration</p><h1>Param\u00E8tres</h1><span>Configuration centralis\u00E9e de la plateforme et gestion dynamique des privil\u00E8ges.</span></header>\n<section class=\"settings-grid\">@for(module of modules;track module.route){<a [routerLink]=\"module.route\"><i aria-hidden=\"true\">\u2699</i><div><strong>{{module.name}}</strong><span>{{module.description}}</span></div><b>\u2192</b></a>}</section>\n", styles: ["header{padding:26px;margin-bottom:18px;border-radius:18px;background:linear-gradient(135deg,#0f766e,#0d9488);color:#fff}header p,header h1{margin:0}header p{font-size:.75rem;font-weight:900;text-transform:uppercase;letter-spacing:.1em}header h1{margin:6px 0;font-size:2.3rem}.settings-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.settings-grid a{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;padding:22px;border:1px solid #dce7e7;border-radius:16px;background:#fff;color:#0f172a;text-decoration:none;box-shadow:0 14px 40px #0f172a0d}.settings-grid i{display:grid;width:46px;height:46px;place-items:center;border-radius:12px;background:#ccfbf1;color:#0f766e;font-style:normal}.settings-grid span,.settings-grid strong{display:block}.settings-grid span{margin-top:5px;color:#64748b}.settings-grid b{color:#0f766e;font-size:1.4rem}@media(max-width:700px){.settings-grid{grid-template-columns:1fr}}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ParametresPage, { className: "ParametresPage", filePath: "src/app/pages/parametres/parametres.page.ts", lineNumber: 5 }); })();
