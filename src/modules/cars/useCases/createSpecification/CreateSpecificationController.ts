import { Request, Response } from 'express';

import CreateSpecificationUseCase from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecification: CreateSpecificationUseCase) {
    this.createSpecification = createSpecification;
  }
  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    const specification = this.createSpecification.execute({
      name,
      description,
    });
    return res.status(201).json(specification);
  }
}

export default CreateSpecificationController;
