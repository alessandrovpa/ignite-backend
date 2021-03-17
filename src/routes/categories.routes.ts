import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const routes = Router();

const categories = [];

routes.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = {
    id: uuid(),
    name,
    description,
    created_at: new Date(),
  };
  categories.push(category);

  return res.status(201).json(category);
});

export default routes;