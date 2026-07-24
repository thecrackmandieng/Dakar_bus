import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "../../core/auth.service";
import * as i2 from "../../core/alert-sound.service";
import * as i3 from "@angular/forms";
function LoginPage_Conditional_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "i");
    i0.ɵɵtext(2, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
export class LoginPage {
    auth;
    alertSound;
    form = new FormGroup({
        role: new FormControl('admin', { nonNullable: true }),
        login: new FormControl('dieng.tech', { nonNullable: true, validators: Validators.required }),
        password: new FormControl('dieng123', { nonNullable: true, validators: Validators.required })
    });
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    constructor(auth, alertSound) {
        this.auth = auth;
        this.alertSound = alertSound;
    }
    submit() {
        this.error.set('');
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            this.error.set('Renseigne ton identifiant et ton mot de passe.');
            return;
        }
        const { login, password, role } = this.form.getRawValue();
        const validIdentifier = role === 'admin'
            ? login === 'dieng.tech'
            : login.toLowerCase().includes('chauffeur');
        if (validIdentifier && password === 'dieng123') {
            this.alertSound.enable();
            this.auth.login(login, role);
            return;
        }
        this.error.set('Identifiant ou mot de passe incorrect.');
    }
    selectRole(role) {
        this.form.controls.role.setValue(role);
        this.form.controls.login.setValue(role === 'admin' ? 'dieng.tech' : 'chauffeur');
        this.error.set('');
    }
    static ɵfac = function LoginPage_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LoginPage)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.AlertSoundService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginPage, selectors: [["app-login"]], decls: 86, vars: 8, consts: [[1, "login-layout"], ["aria-hidden", "true", 1, "ambient", "ambient-one"], ["aria-hidden", "true", 1, "ambient", "ambient-two"], ["aria-hidden", "true", 1, "route", "route-one"], ["aria-hidden", "true", 1, "route", "route-two"], [1, "login-showcase"], ["aria-label", "DDTrack", 1, "brand-mark"], [1, "pin"], [1, "showcase-copy"], [1, "live-pill"], ["aria-label", "Fonctionnalit\u00E9s principales", 1, "feature-row"], [1, "gps-icon"], [1, "people-icon"], [1, "alert-icon"], [1, "form-zone"], ["novalidate", "", 1, "login-card", 3, "ngSubmit", "formGroup"], [1, "mobile-brand"], [1, "mini-pin"], [1, "form-heading"], ["aria-label", "Choisir le type d\u2019acc\u00E8s", 1, "access-switch"], ["type", "button", 3, "click"], ["aria-hidden", "true", 1, "admin-access"], ["aria-hidden", "true", 1, "driver-access"], [1, "input-shell", "user-field"], ["formControlName", "login", "autocomplete", "username", 3, "placeholder"], [1, "input-shell", "password-field"], ["formControlName", "password", "type", "password", "autocomplete", "current-password", "placeholder", "Votre mot de passe"], ["role", "alert", 1, "login-error"], ["type", "submit", 1, "submit-button", 3, "disabled"], ["aria-hidden", "true"], [1, "secure-note"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵelement(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
            i0.ɵɵelementStart(5, "aside", 5)(6, "div", 6)(7, "span", 7);
            i0.ɵɵelement(8, "i");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div")(10, "strong");
            i0.ɵɵtext(11, "DD");
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵtext(13, "TRACK");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "small");
            i0.ɵɵtext(15, "Syst\u00E8me intelligent de suivi des Tata \u00B7 Dakar");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "div", 8)(17, "span", 9);
            i0.ɵɵelement(18, "i");
            i0.ɵɵtext(19, " R\u00E9seau connect\u00E9 en temps r\u00E9el");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "h1");
            i0.ɵɵtext(21, "La mobilit\u00E9 de Dakar,");
            i0.ɵɵelement(22, "br");
            i0.ɵɵelementStart(23, "em");
            i0.ɵɵtext(24, "sous contr\u00F4le.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "p");
            i0.ɵɵtext(26, "Suivez les bus, anticipez les surcharges et pilotez chaque ligne depuis une seule plateforme.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 10)(28, "span");
            i0.ɵɵelement(29, "i", 11);
            i0.ɵɵtext(30, "GPS temps r\u00E9el");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "span");
            i0.ɵɵelement(32, "i", 12);
            i0.ɵɵtext(33, "Comptage intelligent");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "span");
            i0.ɵɵelement(35, "i", 13);
            i0.ɵɵtext(36, "Alertes instantan\u00E9es");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(37, "div", 14)(38, "form", 15);
            i0.ɵɵlistener("ngSubmit", function LoginPage_Template_form_ngSubmit_38_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(39, "div", 16);
            i0.ɵɵelement(40, "span", 17);
            i0.ɵɵelementStart(41, "strong");
            i0.ɵɵtext(42, "DD");
            i0.ɵɵelementStart(43, "span");
            i0.ɵɵtext(44, "TRACK");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(45, "div", 18)(46, "span");
            i0.ɵɵtext(47, "Espace s\u00E9curis\u00E9");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "h2");
            i0.ɵɵtext(49, "Heureux de vous revoir");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "p");
            i0.ɵɵtext(51, "Connectez-vous pour acc\u00E9der \u00E0 votre tableau de bord.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "div", 19)(53, "button", 20);
            i0.ɵɵlistener("click", function LoginPage_Template_button_click_53_listener() { return ctx.selectRole("admin"); });
            i0.ɵɵelement(54, "i", 21);
            i0.ɵɵelementStart(55, "span")(56, "strong");
            i0.ɵɵtext(57, "Administrateur");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "small");
            i0.ɵɵtext(59, "Supervision du r\u00E9seau");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(60, "button", 20);
            i0.ɵɵlistener("click", function LoginPage_Template_button_click_60_listener() { return ctx.selectRole("chauffeur"); });
            i0.ɵɵelement(61, "i", 22);
            i0.ɵɵelementStart(62, "span")(63, "strong");
            i0.ɵɵtext(64, "Chauffeur");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "small");
            i0.ɵɵtext(66, "Mon bus en direct");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(67, "label")(68, "span");
            i0.ɵɵtext(69, "Identifiant");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 23);
            i0.ɵɵelement(71, "input", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(72, "label")(73, "span");
            i0.ɵɵtext(74, "Mot de passe");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(75, "div", 25);
            i0.ɵɵelement(76, "input", 26);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(77, LoginPage_Conditional_77_Template, 4, 1, "div", 27);
            i0.ɵɵelementStart(78, "button", 28)(79, "span");
            i0.ɵɵtext(80, "Se connecter");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "i", 29);
            i0.ɵɵtext(82, "\u2192");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(83, "small", 30);
            i0.ɵɵelement(84, "i", 29);
            i0.ɵɵtext(85, "Connexion s\u00E9curis\u00E9e \u00B7 DDTrack Dakar");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(38);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(15);
            i0.ɵɵclassProp("active", ctx.form.controls.role.value === "admin");
            i0.ɵɵadvance(7);
            i0.ɵɵclassProp("active", ctx.form.controls.role.value === "chauffeur");
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("placeholder", ctx.form.controls.role.value === "admin" ? "Identifiant administrateur" : "Identifiant chauffeur");
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.error() ? 77 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.form.invalid);
        } }, dependencies: [ReactiveFormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.FormGroupDirective, i3.FormControlName], styles: ["[_nghost-%COMP%]{display:block;min-height:100vh}.login-layout[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(430px,.85fr);min-height:100vh;overflow:hidden;background:#f7fbfb}.login-showcase[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;min-height:100vh;padding:54px clamp(38px,6vw,90px);flex-direction:column;justify-content:space-between;overflow:hidden;background:linear-gradient(145deg,#003f47 0%,#006e6c 58%,#009f96 100%);color:#fff}.login-showcase[_ngcontent-%COMP%]::after{position:absolute;right:-180px;bottom:-260px;width:620px;height:620px;border:1px solid #ffffff22;border-radius:50%;box-shadow:0 0 0 70px #ffffff08,0 0 0 140px #ffffff08;content:\"\"}.brand-mark[_ngcontent-%COMP%]{display:flex;align-items:center;gap:18px;animation:_ngcontent-%COMP%_slide-down .7s ease both}.brand-mark[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:grid}.brand-mark[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .mobile-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.75rem;letter-spacing:.14em}.brand-mark[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .mobile-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#12d5c8}.brand-mark[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:4px;color:#b6dcda;font-size:.68rem;letter-spacing:.16em;text-transform:uppercase}.pin[_ngcontent-%COMP%], .mini-pin[_ngcontent-%COMP%]{position:relative;display:block;width:54px;height:54px;border:5px solid #0ad4c7;border-radius:50% 50% 50% 5px;background:#087b74;box-shadow:0 14px 35px #001f2444;transform:rotate(-45deg)}.pin[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .mini-pin[_ngcontent-%COMP%]::after{position:absolute;inset:12px;border:5px solid #003f47;border-radius:50%;background:#12c5bb;content:\"\"}.showcase-copy[_ngcontent-%COMP%]{position:relative;z-index:2;max-width:680px;animation:_ngcontent-%COMP%_reveal .85s .15s ease both}.live-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:9px;padding:8px 13px;border:1px solid #8ff7ef33;border-radius:99px;background:#ffffff13;color:#d9fffc;font-size:.78rem;font-weight:800;backdrop-filter:blur(8px)}.live-pill[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#34f5a2;box-shadow:0 0 0 6px #34f5a222;animation:_ngcontent-%COMP%_blink 1.7s infinite}.showcase-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:24px 0 18px;font-size:clamp(2.6rem,5vw,5.2rem);line-height:.98;letter-spacing:-.045em}.showcase-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{color:#3ce1d4;font-style:normal}.showcase-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:590px;margin:0;color:#c7e5e3;font-size:clamp(1rem,1.5vw,1.2rem);line-height:1.7}.feature-row[_ngcontent-%COMP%]{position:relative;z-index:2;display:flex;gap:26px;animation:_ngcontent-%COMP%_reveal .85s .3s ease both}.feature-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;align-items:center;gap:9px;color:#d4eeec;font-size:.8rem;font-weight:750}.feature-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{position:relative;display:grid;width:31px;height:31px;place-items:center;border-radius:9px;background:#ffffff12}.feature-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]::before{width:12px;height:12px;border:2px solid #5aeee3;border-radius:50%;content:\"\"}.people-icon[_ngcontent-%COMP%]::before{border-radius:50% 50% 4px 4px!important}.alert-icon[_ngcontent-%COMP%]::before{border-radius:3px!important;transform:rotate(45deg)}.form-zone[_ngcontent-%COMP%]{position:relative;z-index:3;display:grid;padding:40px clamp(28px,6vw,86px);place-items:center;background:linear-gradient(135deg,#fff,#eff9f8)}.login-card[_ngcontent-%COMP%]{display:grid;width:min(460px,100%);gap:22px;padding:42px;border:1px solid #d8e9e7!important;border-radius:24px!important;background:#ffffffef!important;box-shadow:0 30px 90px #003f4718!important;backdrop-filter:blur(16px);animation:_ngcontent-%COMP%_card-in .8s .1s cubic-bezier(.2,.8,.2,1) both}.mobile-brand[_ngcontent-%COMP%]{display:none}.form-heading[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:#07877f;font-size:.72rem;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.form-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:7px 0 8px;color:#073c43;font-size:clamp(1.8rem,3vw,2.35rem);letter-spacing:-.03em}.form-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#6b8588;line-height:1.5}.login-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:grid;gap:8px;color:#173f44;font-size:.84rem;font-weight:850}.input-shell[_ngcontent-%COMP%]{position:relative}.input-shell[_ngcontent-%COMP%]::before{position:absolute;left:17px;top:50%;width:15px;height:15px;border:2px solid #7a999b;transform:translateY(-50%);content:\"\"}.user-field[_ngcontent-%COMP%]::before{border-radius:50%;box-shadow:0 10px 0 -3px #7a999b}.password-field[_ngcontent-%COMP%]::before{height:11px;border-radius:3px;transform:translateY(-30%)}.password-field[_ngcontent-%COMP%]::after{position:absolute;left:21px;top:10px;width:9px;height:10px;border:2px solid #7a999b;border-bottom:0;border-radius:8px 8px 0 0;content:\"\"}.input-shell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:54px;padding:0 18px 0 50px;border:1px solid #cadedd;border-radius:12px;outline:0;background:#f8fbfb;color:#123b40;font-weight:700;transition:border-color .2s,box-shadow .2s,background .2s}.input-shell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#0bb4a9;background:#fff;box-shadow:0 0 0 4px #0bb4a916}.input-shell[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#9aadaf;font-weight:500}.login-error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:11px 13px;border:1px solid #fecaca;border-radius:10px;background:#fff1f2;color:#b91c1c;font-size:.82rem;font-weight:750;animation:_ngcontent-%COMP%_shake .35s ease}.login-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:grid;width:20px;height:20px;place-items:center;border-radius:50%;background:#dc2626;color:#fff;font-style:normal}.submit-button[_ngcontent-%COMP%]{display:flex;min-height:55px;align-items:center;justify-content:center;gap:12px;border-radius:12px;background:linear-gradient(100deg,#007c76,#0bb8ac);box-shadow:0 14px 30px #078f8729;font-size:.95rem;transition:transform .2s,box-shadow .2s}.submit-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.25rem;font-style:normal;transition:transform .2s}.submit-button[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 18px 35px #078f8740}.submit-button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:translateX(4px)}.secure-note[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:8px;color:#809496;font-size:.72rem}.secure-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 0 4px #10b98118}.ambient[_ngcontent-%COMP%]{position:absolute;z-index:1;border-radius:50%;filter:blur(1px);pointer-events:none}.ambient-one[_ngcontent-%COMP%]{right:35%;top:-130px;width:350px;height:350px;background:#2ef5e21a;animation:_ngcontent-%COMP%_float 8s ease-in-out infinite}.ambient-two[_ngcontent-%COMP%]{left:38%;bottom:-180px;width:440px;height:440px;background:#00c9bd12;animation:_ngcontent-%COMP%_float 10s -3s ease-in-out infinite}.route[_ngcontent-%COMP%]{position:absolute;z-index:1;width:420px;height:420px;border:1px dashed #ffffff20;border-radius:50%;pointer-events:none}.route-one[_ngcontent-%COMP%]{left:-210px;top:18%;animation:_ngcontent-%COMP%_spin 30s linear infinite}.route-two[_ngcontent-%COMP%]{left:42%;top:-260px;animation:_ngcontent-%COMP%_spin 42s reverse linear infinite}@keyframes _ngcontent-%COMP%_reveal{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}@keyframes _ngcontent-%COMP%_slide-down{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:none}}@keyframes _ngcontent-%COMP%_card-in{from{opacity:0;transform:translateX(35px) scale(.97)}to{opacity:1;transform:none}}@keyframes _ngcontent-%COMP%_blink{50%{opacity:.45;transform:scale(.8)}}@keyframes _ngcontent-%COMP%_float{50%{transform:translateY(25px) translateX(-15px)}}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_shake{25%,75%{transform:translateX(-4px)}50%{transform:translateX(4px)}}@media(max-width:900px){.login-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}.login-showcase[_ngcontent-%COMP%]{display:none}.form-zone[_ngcontent-%COMP%]{min-height:100vh;padding:24px}.login-card[_ngcontent-%COMP%]{padding:clamp(26px,7vw,42px)}.mobile-brand[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:8px}.mini-pin[_ngcontent-%COMP%]{width:42px;height:42px;border-width:4px}.mini-pin[_ngcontent-%COMP%]::after{inset:9px;border-width:4px}.mobile-brand[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:1.3rem}}@media(prefers-reduced-motion:reduce){*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]::before, *[_ngcontent-%COMP%]::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}}", ".access-switch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.access-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 70px;\n  align-items: center;\n  gap: 10px;\n  padding: 11px;\n  border: 1px solid #d7e5e4;\n  border-radius: 12px;\n  background: #f7fbfb;\n  color: #547174;\n  text-align: left;\n  box-shadow: none;\n}\n\n.access-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover { box-shadow: none; }\n.access-switch[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] { border-color: #08a99f; background: #e8faf8; color: #075e59; box-shadow: 0 0 0 3px #08a99f12; }\n.access-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] { position: relative; display: grid; width: 34px; height: 34px; flex: 0 0 34px; place-items: center; border-radius: 9px; background: #e5efee; }\n.access-switch[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] { background: #c9f3ef; }\n.access-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]::before { width: 14px; height: 14px; border: 2px solid currentColor; border-radius: 50%; content: \"\"; }\n.driver-access[_ngcontent-%COMP%]::before { border-radius: 4px !important; }\n.access-switch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.access-switch[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.access-switch[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; }\n.access-switch[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: .78rem; }\n.access-switch[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { margin-top: 3px; color: #789093; font-size: .62rem; font-weight: 650; }\n\n@media (max-width: 430px) {\n  .access-switch[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n  .access-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { min-height: 60px; }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginPage, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"login-layout\">\n  <div class=\"ambient ambient-one\" aria-hidden=\"true\"></div>\n  <div class=\"ambient ambient-two\" aria-hidden=\"true\"></div>\n  <div class=\"route route-one\" aria-hidden=\"true\"></div>\n  <div class=\"route route-two\" aria-hidden=\"true\"></div>\n\n  <aside class=\"login-showcase\">\n    <div class=\"brand-mark\" aria-label=\"DDTrack\">\n      <span class=\"pin\"><i></i></span>\n      <div><strong>DD<span>TRACK</span></strong><small>Syst\u00E8me intelligent de suivi des Tata \u00B7 Dakar</small></div>\n    </div>\n    <div class=\"showcase-copy\">\n      <span class=\"live-pill\"><i></i> R\u00E9seau connect\u00E9 en temps r\u00E9el</span>\n      <h1>La mobilit\u00E9 de Dakar,<br><em>sous contr\u00F4le.</em></h1>\n      <p>Suivez les bus, anticipez les surcharges et pilotez chaque ligne depuis une seule plateforme.</p>\n    </div>\n    <div class=\"feature-row\" aria-label=\"Fonctionnalit\u00E9s principales\">\n      <span><i class=\"gps-icon\"></i>GPS temps r\u00E9el</span>\n      <span><i class=\"people-icon\"></i>Comptage intelligent</span>\n      <span><i class=\"alert-icon\"></i>Alertes instantan\u00E9es</span>\n    </div>\n  </aside>\n\n  <div class=\"form-zone\">\n    <form class=\"login-card\" [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n      <div class=\"mobile-brand\"><span class=\"mini-pin\"></span><strong>DD<span>TRACK</span></strong></div>\n      <div class=\"form-heading\">\n        <span>Espace s\u00E9curis\u00E9</span>\n        <h2>Heureux de vous revoir</h2>\n        <p>Connectez-vous pour acc\u00E9der \u00E0 votre tableau de bord.</p>\n      </div>\n\n      <div class=\"access-switch\" aria-label=\"Choisir le type d\u2019acc\u00E8s\">\n        <button type=\"button\" [class.active]=\"form.controls.role.value === 'admin'\" (click)=\"selectRole('admin')\">\n          <i class=\"admin-access\" aria-hidden=\"true\"></i>\n          <span><strong>Administrateur</strong><small>Supervision du r\u00E9seau</small></span>\n        </button>\n        <button type=\"button\" [class.active]=\"form.controls.role.value === 'chauffeur'\" (click)=\"selectRole('chauffeur')\">\n          <i class=\"driver-access\" aria-hidden=\"true\"></i>\n          <span><strong>Chauffeur</strong><small>Mon bus en direct</small></span>\n        </button>\n      </div>\n\n      <label>\n        <span>Identifiant</span>\n        <div class=\"input-shell user-field\">\n          <input formControlName=\"login\" autocomplete=\"username\" [placeholder]=\"form.controls.role.value === 'admin' ? 'Identifiant administrateur' : 'Identifiant chauffeur'\">\n        </div>\n      </label>\n      <label>\n        <span>Mot de passe</span>\n        <div class=\"input-shell password-field\">\n          <input formControlName=\"password\" type=\"password\" autocomplete=\"current-password\" placeholder=\"Votre mot de passe\">\n        </div>\n      </label>\n\n      @if (error()) {\n        <div class=\"login-error\" role=\"alert\"><i>!</i>{{ error() }}</div>\n      }\n\n      <button class=\"submit-button\" type=\"submit\" [disabled]=\"form.invalid\">\n        <span>Se connecter</span><i aria-hidden=\"true\">\u2192</i>\n      </button>\n      <small class=\"secure-note\"><i aria-hidden=\"true\"></i>Connexion s\u00E9curis\u00E9e \u00B7 DDTrack Dakar</small>\n    </form>\n  </div>\n</section>\n", styles: [":host{display:block;min-height:100vh}.login-layout{position:relative;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(430px,.85fr);min-height:100vh;overflow:hidden;background:#f7fbfb}.login-showcase{position:relative;z-index:2;display:flex;min-height:100vh;padding:54px clamp(38px,6vw,90px);flex-direction:column;justify-content:space-between;overflow:hidden;background:linear-gradient(145deg,#003f47 0%,#006e6c 58%,#009f96 100%);color:#fff}.login-showcase::after{position:absolute;right:-180px;bottom:-260px;width:620px;height:620px;border:1px solid #ffffff22;border-radius:50%;box-shadow:0 0 0 70px #ffffff08,0 0 0 140px #ffffff08;content:\"\"}.brand-mark{display:flex;align-items:center;gap:18px;animation:slide-down .7s ease both}.brand-mark>div{display:grid}.brand-mark strong,.mobile-brand strong{font-size:1.75rem;letter-spacing:.14em}.brand-mark strong span,.mobile-brand strong span{color:#12d5c8}.brand-mark small{margin-top:4px;color:#b6dcda;font-size:.68rem;letter-spacing:.16em;text-transform:uppercase}.pin,.mini-pin{position:relative;display:block;width:54px;height:54px;border:5px solid #0ad4c7;border-radius:50% 50% 50% 5px;background:#087b74;box-shadow:0 14px 35px #001f2444;transform:rotate(-45deg)}.pin i,.mini-pin::after{position:absolute;inset:12px;border:5px solid #003f47;border-radius:50%;background:#12c5bb;content:\"\"}.showcase-copy{position:relative;z-index:2;max-width:680px;animation:reveal .85s .15s ease both}.live-pill{display:inline-flex;align-items:center;gap:9px;padding:8px 13px;border:1px solid #8ff7ef33;border-radius:99px;background:#ffffff13;color:#d9fffc;font-size:.78rem;font-weight:800;backdrop-filter:blur(8px)}.live-pill i{width:8px;height:8px;border-radius:50%;background:#34f5a2;box-shadow:0 0 0 6px #34f5a222;animation:blink 1.7s infinite}.showcase-copy h1{margin:24px 0 18px;font-size:clamp(2.6rem,5vw,5.2rem);line-height:.98;letter-spacing:-.045em}.showcase-copy h1 em{color:#3ce1d4;font-style:normal}.showcase-copy p{max-width:590px;margin:0;color:#c7e5e3;font-size:clamp(1rem,1.5vw,1.2rem);line-height:1.7}.feature-row{position:relative;z-index:2;display:flex;gap:26px;animation:reveal .85s .3s ease both}.feature-row span{display:flex;align-items:center;gap:9px;color:#d4eeec;font-size:.8rem;font-weight:750}.feature-row i{position:relative;display:grid;width:31px;height:31px;place-items:center;border-radius:9px;background:#ffffff12}.feature-row i::before{width:12px;height:12px;border:2px solid #5aeee3;border-radius:50%;content:\"\"}.people-icon::before{border-radius:50% 50% 4px 4px!important}.alert-icon::before{border-radius:3px!important;transform:rotate(45deg)}.form-zone{position:relative;z-index:3;display:grid;padding:40px clamp(28px,6vw,86px);place-items:center;background:linear-gradient(135deg,#fff,#eff9f8)}.login-card{display:grid;width:min(460px,100%);gap:22px;padding:42px;border:1px solid #d8e9e7!important;border-radius:24px!important;background:#ffffffef!important;box-shadow:0 30px 90px #003f4718!important;backdrop-filter:blur(16px);animation:card-in .8s .1s cubic-bezier(.2,.8,.2,1) both}.mobile-brand{display:none}.form-heading>span{color:#07877f;font-size:.72rem;font-weight:900;letter-spacing:.13em;text-transform:uppercase}.form-heading h2{margin:7px 0 8px;color:#073c43;font-size:clamp(1.8rem,3vw,2.35rem);letter-spacing:-.03em}.form-heading p{margin:0;color:#6b8588;line-height:1.5}.login-card label{display:grid;gap:8px;color:#173f44;font-size:.84rem;font-weight:850}.input-shell{position:relative}.input-shell::before{position:absolute;left:17px;top:50%;width:15px;height:15px;border:2px solid #7a999b;transform:translateY(-50%);content:\"\"}.user-field::before{border-radius:50%;box-shadow:0 10px 0 -3px #7a999b}.password-field::before{height:11px;border-radius:3px;transform:translateY(-30%)}.password-field::after{position:absolute;left:21px;top:10px;width:9px;height:10px;border:2px solid #7a999b;border-bottom:0;border-radius:8px 8px 0 0;content:\"\"}.input-shell input{width:100%;height:54px;padding:0 18px 0 50px;border:1px solid #cadedd;border-radius:12px;outline:0;background:#f8fbfb;color:#123b40;font-weight:700;transition:border-color .2s,box-shadow .2s,background .2s}.input-shell input:focus{border-color:#0bb4a9;background:#fff;box-shadow:0 0 0 4px #0bb4a916}.input-shell input::placeholder{color:#9aadaf;font-weight:500}.login-error{display:flex;align-items:center;gap:10px;padding:11px 13px;border:1px solid #fecaca;border-radius:10px;background:#fff1f2;color:#b91c1c;font-size:.82rem;font-weight:750;animation:shake .35s ease}.login-error i{display:grid;width:20px;height:20px;place-items:center;border-radius:50%;background:#dc2626;color:#fff;font-style:normal}.submit-button{display:flex;min-height:55px;align-items:center;justify-content:center;gap:12px;border-radius:12px;background:linear-gradient(100deg,#007c76,#0bb8ac);box-shadow:0 14px 30px #078f8729;font-size:.95rem;transition:transform .2s,box-shadow .2s}.submit-button i{font-size:1.25rem;font-style:normal;transition:transform .2s}.submit-button:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 18px 35px #078f8740}.submit-button:hover i{transform:translateX(4px)}.secure-note{display:flex;align-items:center;justify-content:center;gap:8px;color:#809496;font-size:.72rem}.secure-note i{width:7px;height:7px;border-radius:50%;background:#10b981;box-shadow:0 0 0 4px #10b98118}.ambient{position:absolute;z-index:1;border-radius:50%;filter:blur(1px);pointer-events:none}.ambient-one{right:35%;top:-130px;width:350px;height:350px;background:#2ef5e21a;animation:float 8s ease-in-out infinite}.ambient-two{left:38%;bottom:-180px;width:440px;height:440px;background:#00c9bd12;animation:float 10s -3s ease-in-out infinite}.route{position:absolute;z-index:1;width:420px;height:420px;border:1px dashed #ffffff20;border-radius:50%;pointer-events:none}.route-one{left:-210px;top:18%;animation:spin 30s linear infinite}.route-two{left:42%;top:-260px;animation:spin 42s reverse linear infinite}@keyframes reveal{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}@keyframes slide-down{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:none}}@keyframes card-in{from{opacity:0;transform:translateX(35px) scale(.97)}to{opacity:1;transform:none}}@keyframes blink{50%{opacity:.45;transform:scale(.8)}}@keyframes float{50%{transform:translateY(25px) translateX(-15px)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes shake{25%,75%{transform:translateX(-4px)}50%{transform:translateX(4px)}}@media(max-width:900px){.login-layout{grid-template-columns:1fr}.login-showcase{display:none}.form-zone{min-height:100vh;padding:24px}.login-card{padding:clamp(26px,7vw,42px)}.mobile-brand{display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:8px}.mini-pin{width:42px;height:42px;border-width:4px}.mini-pin::after{inset:9px;border-width:4px}.mobile-brand strong{font-size:1.3rem}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;scroll-behavior:auto!important}}\n", ".access-switch {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.access-switch button {\n  display: flex;\n  min-height: 70px;\n  align-items: center;\n  gap: 10px;\n  padding: 11px;\n  border: 1px solid #d7e5e4;\n  border-radius: 12px;\n  background: #f7fbfb;\n  color: #547174;\n  text-align: left;\n  box-shadow: none;\n}\n\n.access-switch button:hover { box-shadow: none; }\n.access-switch button.active { border-color: #08a99f; background: #e8faf8; color: #075e59; box-shadow: 0 0 0 3px #08a99f12; }\n.access-switch button > i { position: relative; display: grid; width: 34px; height: 34px; flex: 0 0 34px; place-items: center; border-radius: 9px; background: #e5efee; }\n.access-switch button.active > i { background: #c9f3ef; }\n.access-switch button > i::before { width: 14px; height: 14px; border: 2px solid currentColor; border-radius: 50%; content: \"\"; }\n.driver-access::before { border-radius: 4px !important; }\n.access-switch span,\n.access-switch strong,\n.access-switch small { display: block; }\n.access-switch strong { font-size: .78rem; }\n.access-switch small { margin-top: 3px; color: #789093; font-size: .62rem; font-weight: 650; }\n\n@media (max-width: 430px) {\n  .access-switch { grid-template-columns: 1fr; }\n  .access-switch button { min-height: 60px; }\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.AlertSoundService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/login/login.page.ts", lineNumber: 14 }); })();
