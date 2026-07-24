# DDTrack Mobile

Application Ionic destinée aux voyageurs. Elle affiche uniquement les bus ayant une position GPS, avec leur ligne, leur niveau de remplissage et des filtres en temps réel.

## Développement

1. Démarrer l'API du dossier `backend` sur le port `3000`.
2. Lancer `npm start` dans ce dossier.

Sur un téléphone physique, remplacer `localhost` dans `src/environments/environment.ts` par l'adresse IP locale de la machine qui exécute l'API, par exemple `http://192.168.1.20:3000/api`.

## Production et natif

Renseigner l'URL HTTPS réelle dans `src/environments/environment.prod.ts`, puis exécuter :

```bash
npm run build
npx cap add android # ou: npx cap add ios
npx cap sync
```
