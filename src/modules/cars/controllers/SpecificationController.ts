import { Request, Response } from 'express';

import { ISpecificationRepository } from '../repositories/interfaces/ISpecificationRepository';
import CreateSpecificationService from '../services/CreateSpecificationService';
import ListSpecificationsService from '../services/ListSpecificationsService';

class CategoryController {
  constructor(private specificationRepository: ISpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }

  create(req: Request, res: Response): Response {
    const { name, description } = req.body;
    const createSpecification = new CreateSpecificationService(
      this.specificationRepository,
    );
    const specification = createSpecification.execute({ name, description });

    return res.status(201).json(specification);
  }

  list(req: Request, res: Response): Response {
    const listSpecifications = new ListSpecificationsService(
      this.specificationRepository,
    );
    const categories = listSpecifications.execute();
    return res.json(categories);
  }
}

export default CategoryController;
