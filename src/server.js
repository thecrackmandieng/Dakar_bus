import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import alertesRoutes from './routes/alertes.routes.js';
import busRoutes from './routes/bus.routes.js';
import comptagesPassagersRoutes from './routes/comptages-passagers.routes.js';
import lignesRoutes from './routes/lignes.routes.js';
import notificationsRoutes from './routes/notifications.routes.js';
import positionsGpsRoutes from './routes/positions-gps.routes.js';
import rolesRoutes from './routes/roles.routes.js';
import stationsRoutes from './routes/stations.routes.js';
import stationsLignesRoutes from './routes/stations-lignes.routes.js';
import statutsAlertesRoutes from './routes/statuts-alertes.routes.js';
import trajetsRoutes from './routes/trajets.routes.js';
import typesAlertesRoutes from './routes/types-alertes.routes.js';
import utilisateursRoutes from './routes/utilisateurs.routes.js';
import videosSurveillanceRoutes from './routes/videos-surveillance.routes.js';
import vueAlertesSurchargeRoutes from './routes/vue-alertes-surcharge.routes.js';
import vueBusTempsReelRoutes from './routes/vue-bus-temps-reel.routes.js';
import realtimeRoutes from './routes/realtime.routes.js';
import './gps-reader.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: true, service: 'Dakar Bus API' });
});

app.use('/api/auth', authRoutes);
app.use('/api/alertes', alertesRoutes);
app.use('/api/bus', busRoutes);
app.use('/api/comptages-passagers', comptagesPassagersRoutes);
app.use('/api/lignes', lignesRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/positions-gps', positionsGpsRoutes);
app.use('/api/roles', rolesRoutes);
app.use('/api/stations', stationsRoutes);
app.use('/api/stations-lignes', stationsLignesRoutes);
app.use('/api/statuts-alertes', statutsAlertesRoutes);
app.use('/api/trajets', trajetsRoutes);
app.use('/api/types-alertes', typesAlertesRoutes);
app.use('/api/utilisateurs', utilisateursRoutes);
app.use('/api/videos-surveillance', videosSurveillanceRoutes);
app.use('/api/vue-alertes-surcharge', vueAlertesSurchargeRoutes);
app.use('/api/vue-bus-temps-reel', vueBusTempsReelRoutes);
app.use('/api/realtime', realtimeRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    message: error.message || 'Erreur serveur'
  });
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`Dakar Bus backend running on http://localhost:${port}`);
});
