import { LoginPage } from './pages/login/login.page';
import { DemoPage } from './pages/demo/demo.page';
import { AlertesPage } from './pages/alertes/alertes.page';
import { BusPage } from './pages/bus/bus.page';
import { ComptagesPassagersPage } from './pages/comptages-passagers/comptages-passagers.page';
import { LignesPage } from './pages/lignes/lignes.page';
import { NotificationsPage } from './pages/notifications/notifications.page';
import { PositionsGpsPage } from './pages/positions-gps/positions-gps.page';
import { RolesPage } from './pages/roles/roles.page';
import { StationsPage } from './pages/stations/stations.page';
import { StationsLignesPage } from './pages/stations-lignes/stations-lignes.page';
import { StatutsAlertesPage } from './pages/statuts-alertes/statuts-alertes.page';
import { TrajetsPage } from './pages/trajets/trajets.page';
import { TypesAlertesPage } from './pages/types-alertes/types-alertes.page';
import { UtilisateursPage } from './pages/utilisateurs/utilisateurs.page';
import { VideosSurveillancePage } from './pages/videos-surveillance/videos-surveillance.page';
import { VueAlertesSurchargePage } from './pages/vue-alertes-surcharge/vue-alertes-surcharge.page';
import { VueBusTempsReelPage } from './pages/vue-bus-temps-reel/vue-bus-temps-reel.page';
import { ChauffeurPage } from './pages/chauffeur/chauffeur.page';
import { ParametresPage } from './pages/parametres/parametres.page';
import { ModulesGpsPage } from './pages/modules-gps/modules-gps.page';
import { AffectationsLignesPage } from './pages/affectations-lignes/affectations-lignes.page';
import { adminGuard, authGuard, guestGuard } from './core/auth.guard';
export const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginPage, canActivate: [guestGuard] },
    { path: 'chauffeur', component: ChauffeurPage, canActivate: [authGuard] },
    { path: 'dashboard', component: DemoPage, canActivate: [adminGuard] },
    { path: 'demo', redirectTo: 'dashboard' },
    { path: 'parametres', component: ParametresPage, canActivate: [adminGuard] },
    { path: 'modules-gps', component: ModulesGpsPage, canActivate: [adminGuard] },
    { path: 'affectations-lignes', component: AffectationsLignesPage, canActivate: [adminGuard] },
    { path: 'alertes', component: AlertesPage, canActivate: [adminGuard] },
    { path: 'bus', component: BusPage, canActivate: [adminGuard] },
    { path: 'comptages-passagers', component: ComptagesPassagersPage, canActivate: [adminGuard] },
    { path: 'lignes', component: LignesPage, canActivate: [adminGuard] },
    { path: 'notifications', component: NotificationsPage, canActivate: [adminGuard] },
    { path: 'positions-gps', component: PositionsGpsPage, canActivate: [adminGuard] },
    { path: 'roles', component: RolesPage, canActivate: [adminGuard] },
    { path: 'stations', component: StationsPage, canActivate: [adminGuard] },
    { path: 'stations-lignes', component: StationsLignesPage, canActivate: [adminGuard] },
    { path: 'statuts-alertes', component: StatutsAlertesPage, canActivate: [adminGuard] },
    { path: 'trajets', component: TrajetsPage, canActivate: [adminGuard] },
    { path: 'types-alertes', component: TypesAlertesPage, canActivate: [adminGuard] },
    { path: 'utilisateurs', component: UtilisateursPage, canActivate: [adminGuard] },
    { path: 'videos-surveillance', component: VideosSurveillancePage, canActivate: [adminGuard] },
    { path: 'vue-alertes-surcharge', component: VueAlertesSurchargePage, canActivate: [adminGuard] },
    { path: 'vue-bus-temps-reel', component: VueBusTempsReelPage, canActivate: [adminGuard] },
    { path: '**', redirectTo: 'login' }
];
