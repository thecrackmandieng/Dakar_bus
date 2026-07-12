import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({selector:'app-parametres',standalone:true,imports:[RouterLink],templateUrl:'./parametres.page.html',styleUrl:'./parametres.page.scss',changeDetection:ChangeDetectionStrategy.OnPush})
export class ParametresPage {
  readonly modules = [
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
}
