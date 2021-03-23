import { Request, Response } from 'express';

import CreateCategoryUseCase from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategory: CreateCategoryUseCase) {
    this.createCategory = createCategory;
  }

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    const category = this.createCategory.execute({ name, description });

    return res.status(201).json(category);
  }
}

export default CreateCategoryController;
