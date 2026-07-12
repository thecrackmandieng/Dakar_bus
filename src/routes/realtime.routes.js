import { Router } from 'express';
import { getConnectedGpsModules, getTelemetry, resetPassengerCounter, telemetryEvents } from '../gps-reader.js';

const router = Router();

router.get('/connected-gps-modules', (req, res) => {
  res.json(getConnectedGpsModules());
});

router.post('/buses/:busId/reset-counter', (req, res) => {
  if (!resetPassengerCounter(req.params.busId)) {
    return res.status(404).json({ message: 'Ce bus n’est pas connecté à ce module GPS/IR.' });
  }

  res.json({ status: true, message: 'Compteur passagers initialisé.' });
});

router.get('/stream', (req, res) => {
  res.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  });
  res.flushHeaders();

  const send = (telemetry) => res.write(`data: ${JSON.stringify(telemetry)}\n\n`);
  const heartbeat = setInterval(() => res.write(': heartbeat\n\n'), 15000);
  telemetryEvents.on('telemetry', send);
  send(getTelemetry());

  req.on('close', () => {
    clearInterval(heartbeat);
    telemetryEvents.off('telemetry', send);
  });
});

export default router;
