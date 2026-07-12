import { Router } from 'express';
import * as controller from '../controllers/trajets.controller.js';

const router = Router();

router.get('/', controller.list);
router.get('/affectations/actives', controller.activeAssignments);
router.post('/affecter', controller.assign);
router.get('/:id', controller.get);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
