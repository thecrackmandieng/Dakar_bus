# Dakar Bus

Projet genere automatiquement par StackForge Studio.

## Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## Frontend Angular Web

```bash
cd frontend
npm install
npm start
```

Le backend expose les routes CRUD sous `http://localhost:3000/api`.

## Demo frontend

- Login: `dieng.tech`
- Mot de passe: `dieng123`
- OTP: demande un code par email ou SMS depuis la page de connexion.
- Page de demarrage: `/login`

## OTP email/SMS

Le backend expose:

- `POST /api/auth/request-otp` avec `{ "recipient": "email@site.com" }` ou `{ "recipient": "+221..." }`
- `POST /api/auth/verify-otp` avec `{ "recipient": "...", "code": "123456" }`

Configure `.env` pour envoyer les codes:

- Email SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`
- SMS Twilio: `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM`

Si aucun fournisseur n'est configure, le code OTP est affiche dans les logs backend en mode developpement.

## Ecrans frontend

| Ecran | Route | Description |
| --- | --- | --- |
| Connexion | `/login` | Connexion demo avec login dieng.tech, mot de passe dieng123 ou OTP envoye par email/SMS. |
| Demo | `/demo` | Vue centrale pour ouvrir tous les ecrans generes. |
| Alertes | `/alertes` | Ecran CRUD genere pour la table alertes. |
| Bus | `/bus` | Ecran CRUD genere pour la table bus. |
| ComptagesPassagers | `/comptages-passagers` | Ecran CRUD genere pour la table comptages_passagers. |
| Lignes | `/lignes` | Ecran CRUD genere pour la table lignes. |
| Notifications | `/notifications` | Ecran CRUD genere pour la table notifications. |
| PositionsGps | `/positions-gps` | Ecran CRUD genere pour la table positions_gps. |
| Roles | `/roles` | Ecran CRUD genere pour la table roles. |
| Stations | `/stations` | Ecran CRUD genere pour la table stations. |
| StationsLignes | `/stations-lignes` | Ecran CRUD genere pour la table stations_lignes. |
| StatutsAlertes | `/statuts-alertes` | Ecran CRUD genere pour la table statuts_alertes. |
| Trajets | `/trajets` | Ecran CRUD genere pour la table trajets. |
| TypesAlertes | `/types-alertes` | Ecran CRUD genere pour la table types_alertes. |
| Utilisateurs | `/utilisateurs` | Ecran CRUD genere pour la table utilisateurs. |
| VideosSurveillance | `/videos-surveillance` | Ecran CRUD genere pour la table videos_surveillance. |
| VueAlertesSurcharge | `/vue-alertes-surcharge` | Ecran CRUD genere pour la table vue_alertes_surcharge. |
| VueBusTempsReel | `/vue-bus-temps-reel` | Ecran CRUD genere pour la table vue_bus_temps_reel. |

## Documentation backend

| Methode | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/health` | Verifier que le backend genere fonctionne. |
| POST | `/api/auth/request-otp` | Generer et envoyer un code OTP par email ou SMS. |
| POST | `/api/auth/verify-otp` | Verifier un code OTP envoye a un email ou telephone. |
| GET | `/api/alertes` | Lister les donnees de alertes. |
| GET | `/api/alertes/:id` | Lire un element alertes par identifiant. |
| POST | `/api/alertes` | Creer un element alertes. |
| PUT | `/api/alertes/:id` | Modifier un element alertes. |
| DELETE | `/api/alertes/:id` | Supprimer un element alertes. |
| GET | `/api/bus` | Lister les donnees de bus. |
| GET | `/api/bus/:id` | Lire un element bus par identifiant. |
| POST | `/api/bus` | Creer un element bus. |
| PUT | `/api/bus/:id` | Modifier un element bus. |
| DELETE | `/api/bus/:id` | Supprimer un element bus. |
| GET | `/api/comptages-passagers` | Lister les donnees de comptages_passagers. |
| GET | `/api/comptages-passagers/:id` | Lire un element comptages_passagers par identifiant. |
| POST | `/api/comptages-passagers` | Creer un element comptages_passagers. |
| PUT | `/api/comptages-passagers/:id` | Modifier un element comptages_passagers. |
| DELETE | `/api/comptages-passagers/:id` | Supprimer un element comptages_passagers. |
| GET | `/api/lignes` | Lister les donnees de lignes. |
| GET | `/api/lignes/:id` | Lire un element lignes par identifiant. |
| POST | `/api/lignes` | Creer un element lignes. |
| PUT | `/api/lignes/:id` | Modifier un element lignes. |
| DELETE | `/api/lignes/:id` | Supprimer un element lignes. |
| GET | `/api/notifications` | Lister les donnees de notifications. |
| GET | `/api/notifications/:id` | Lire un element notifications par identifiant. |
| POST | `/api/notifications` | Creer un element notifications. |
| PUT | `/api/notifications/:id` | Modifier un element notifications. |
| DELETE | `/api/notifications/:id` | Supprimer un element notifications. |
| GET | `/api/positions-gps` | Lister les donnees de positions_gps. |
| GET | `/api/positions-gps/:id` | Lire un element positions_gps par identifiant. |
| POST | `/api/positions-gps` | Creer un element positions_gps. |
| PUT | `/api/positions-gps/:id` | Modifier un element positions_gps. |
| DELETE | `/api/positions-gps/:id` | Supprimer un element positions_gps. |
| GET | `/api/roles` | Lister les donnees de roles. |
| GET | `/api/roles/:id` | Lire un element roles par identifiant. |
| POST | `/api/roles` | Creer un element roles. |
| PUT | `/api/roles/:id` | Modifier un element roles. |
| DELETE | `/api/roles/:id` | Supprimer un element roles. |
| GET | `/api/stations` | Lister les donnees de stations. |
| GET | `/api/stations/:id` | Lire un element stations par identifiant. |
| POST | `/api/stations` | Creer un element stations. |
| PUT | `/api/stations/:id` | Modifier un element stations. |
| DELETE | `/api/stations/:id` | Supprimer un element stations. |
| GET | `/api/stations-lignes` | Lister les donnees de stations_lignes. |
| GET | `/api/stations-lignes/:id` | Lire un element stations_lignes par identifiant. |
| POST | `/api/stations-lignes` | Creer un element stations_lignes. |
| PUT | `/api/stations-lignes/:id` | Modifier un element stations_lignes. |
| DELETE | `/api/stations-lignes/:id` | Supprimer un element stations_lignes. |
| GET | `/api/statuts-alertes` | Lister les donnees de statuts_alertes. |
| GET | `/api/statuts-alertes/:id` | Lire un element statuts_alertes par identifiant. |
| POST | `/api/statuts-alertes` | Creer un element statuts_alertes. |
| PUT | `/api/statuts-alertes/:id` | Modifier un element statuts_alertes. |
| DELETE | `/api/statuts-alertes/:id` | Supprimer un element statuts_alertes. |
| GET | `/api/trajets` | Lister les donnees de trajets. |
| GET | `/api/trajets/:id` | Lire un element trajets par identifiant. |
| POST | `/api/trajets` | Creer un element trajets. |
| PUT | `/api/trajets/:id` | Modifier un element trajets. |
| DELETE | `/api/trajets/:id` | Supprimer un element trajets. |
| GET | `/api/types-alertes` | Lister les donnees de types_alertes. |
| GET | `/api/types-alertes/:id` | Lire un element types_alertes par identifiant. |
| POST | `/api/types-alertes` | Creer un element types_alertes. |
| PUT | `/api/types-alertes/:id` | Modifier un element types_alertes. |
| DELETE | `/api/types-alertes/:id` | Supprimer un element types_alertes. |
| GET | `/api/utilisateurs` | Lister les donnees de utilisateurs. |
| GET | `/api/utilisateurs/:id` | Lire un element utilisateurs par identifiant. |
| POST | `/api/utilisateurs` | Creer un element utilisateurs. |
| PUT | `/api/utilisateurs/:id` | Modifier un element utilisateurs. |
| DELETE | `/api/utilisateurs/:id` | Supprimer un element utilisateurs. |
| GET | `/api/videos-surveillance` | Lister les donnees de videos_surveillance. |
| GET | `/api/videos-surveillance/:id` | Lire un element videos_surveillance par identifiant. |
| POST | `/api/videos-surveillance` | Creer un element videos_surveillance. |
| PUT | `/api/videos-surveillance/:id` | Modifier un element videos_surveillance. |
| DELETE | `/api/videos-surveillance/:id` | Supprimer un element videos_surveillance. |
| GET | `/api/vue-alertes-surcharge` | Lister les donnees de vue_alertes_surcharge. |
| GET | `/api/vue-alertes-surcharge/:id` | Lire un element vue_alertes_surcharge par identifiant. |
| POST | `/api/vue-alertes-surcharge` | Creer un element vue_alertes_surcharge. |
| PUT | `/api/vue-alertes-surcharge/:id` | Modifier un element vue_alertes_surcharge. |
| DELETE | `/api/vue-alertes-surcharge/:id` | Supprimer un element vue_alertes_surcharge. |
| GET | `/api/vue-bus-temps-reel` | Lister les donnees de vue_bus_temps_reel. |
| GET | `/api/vue-bus-temps-reel/:id` | Lire un element vue_bus_temps_reel par identifiant. |
| POST | `/api/vue-bus-temps-reel` | Creer un element vue_bus_temps_reel. |
| PUT | `/api/vue-bus-temps-reel/:id` | Modifier un element vue_bus_temps_reel. |
| DELETE | `/api/vue-bus-temps-reel/:id` | Supprimer un element vue_bus_temps_reel. |
