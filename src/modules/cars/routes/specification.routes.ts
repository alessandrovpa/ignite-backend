import { Router } from 'express';

import { specificationController } from '../controllers';

const routes = Router();

routes.post('/', (req, res) => {
  return specificationController.create(req, res);
});

routes.get('/', (req, res) => {
  return specificationController.list(req, res);
});

export default routes;
