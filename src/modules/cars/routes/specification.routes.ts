import { Router } from 'express';

import SpecificationRepository from '../repositories/implementations/SpecificationRepository';
import CreateSpecificationService from '../services/CreateSpecificationService';
import ListSpecificationsService from '../services/ListSpecificationsService';

const specificationRepository = new SpecificationRepository();

const routes = Router();

routes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createSpecification = new CreateSpecificationService(
    specificationRepository,
  );
  const specification = createSpecification.execute({ name, description });
  return res.status(201).json(specification);
});

routes.get('/', (req, res) => {
  const listSpecifications = new ListSpecificationsService(
    specificationRepository,
  );
  const specifications = listSpecifications.execute();
  return res.json(specifications);
});

export default routes;
