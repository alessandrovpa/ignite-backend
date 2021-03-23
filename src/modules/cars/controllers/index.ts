import CategoryRepository from '../repositories/implementations/CategoryRepository';
import SpecificationRepository from '../repositories/implementations/SpecificationRepository';
import CategoryController from './CategoryController';
import SpecificationController from './SpecificationController';

const categoryRepository = CategoryRepository.getInstance();
const specificationRepository = SpecificationRepository.getInstance();

const specificationController = new SpecificationController(
  specificationRepository,
);
const categoryController = new CategoryController(categoryRepository);

export { categoryController, specificationController };
