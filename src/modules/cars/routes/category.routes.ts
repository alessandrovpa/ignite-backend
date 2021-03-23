import { Router } from 'express';

import { categoryController } from '../controllers';

const routes = Router();

routes.post('/', (req, res) => {
  return categoryController.create(req, res);
});

routes.get('/', (req, res) => {
  return categoryController.list(req, res);
});

export default routes;
