import { Router } from 'express';
import * as service from '../services/modules-gps.service.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try { res.json(await service.findAll()); } catch (error) { next(error); }
});

router.post('/', async (req, res, next) => {
  try { res.status(201).json(await service.create(req.body)); } catch (error) { next(error); }
});

router.put('/:id', async (req, res, next) => {
  try {
    const module = await service.update(req.params.id, req.body);
    if (!module) { return res.status(404).json({ message: 'Module GPS introuvable.' }); }
    res.json(module);
  } catch (error) { next(error); }
});

router.delete('/:id', async (req, res, next) => {
  try {
    if (!await service.remove(req.params.id)) { return res.status(404).json({ message: 'Module GPS introuvable.' }); }
    res.status(204).end();
  } catch (error) { next(error); }
});

export default router;
