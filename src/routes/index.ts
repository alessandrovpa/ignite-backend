import { Router } from 'express';

import categoryRoutes from '../modules/cars/routes/category.routes';
import specificationRoutes from '../modules/cars/routes/specification.routes';

const routes = Router();

routes.use('/category', categoryRoutes);
routes.use('/specification', specificationRoutes);

export default routes;
