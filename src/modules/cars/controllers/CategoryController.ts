import { Request, Response } from 'express';

import { ICategoryRepository } from '../repositories/interfaces/ICategoryRepository';
import CreateCategoryService from '../services/CreateCategoryService';
import ListCategoriesService from '../services/ListCategoriesService';

class CategoryController {
  constructor(private categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  create(req: Request, res: Response): Response {
    const { name, description } = req.body;
    const createCategory = new CreateCategoryService(this.categoryRepository);
    const category = createCategory.execute({ name, description });

    return res.status(201).json(category);
  }

  list(req: Request, res: Response): Response {
    const listCategories = new ListCategoriesService(this.categoryRepository);
    const categories = listCategories.execute();
    return res.json(categories);
  }
}

export default CategoryController;
