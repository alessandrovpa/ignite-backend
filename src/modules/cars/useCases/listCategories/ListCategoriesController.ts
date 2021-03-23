import { Request, Response } from 'express';

import ListCategoriesUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategories: ListCategoriesUseCase) {
    this.listCategories = listCategories;
  }

  handle(req: Request, res: Response): Response {
    const categories = this.listCategories.execute();

    return res.status(201).json(categories);
  }
}

export default ListCategoriesController;
