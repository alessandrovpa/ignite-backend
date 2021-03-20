import { Router } from 'express';

import CategoryRepository from '../repositories/implementations/CategoryRepository';
import CreateCategoryService from '../services/CreateCategoryService';
import ListCategoriesService from '../services/ListCategoriesService';

const categoryRepository = new CategoryRepository();

const routes = Router();

routes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createCategory = new CreateCategoryService(categoryRepository);
  const category = createCategory.execute({ name, description });

  return res.status(201).json(category);
});

routes.get('/', (req, res) => {
  const listCategories = new ListCategoriesService(categoryRepository);
  const categories = listCategories.execute();
  return res.json(categories);
});

export default routes;
