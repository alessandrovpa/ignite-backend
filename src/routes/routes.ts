import { Router } from 'express';

const routes = Router();

import categoriesRoutes from './categories.routes';

routes.use('/categories', categoriesRoutes);

export default routes;
