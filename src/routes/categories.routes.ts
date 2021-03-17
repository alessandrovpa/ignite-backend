import { Router } from 'express';

import CategoriesRepository from '../repositories/CategoriesRepository';

const categoryRepository = new CategoriesRepository();

const routes = Router();

routes.post('/', (req, res) => {
  const { name, description } = req.body;

  const verifyExistCategory = categoryRepository.findByName(name);
  if (verifyExistCategory) {
    return res.status(400).json({ error: 'Category already exist' });
  }

  const category = categoryRepository.create({ name, description });
  return res.status(201).json(category);
});

routes.get('/', (req, res) => {
  const categories = categoryRepository.list();
  return res.json(categories);
});

export default routes;
