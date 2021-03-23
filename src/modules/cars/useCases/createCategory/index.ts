import CategoryRepository from '../../repositories/implementations/CategoryRepository';
import CreateCategoryController from './CreateCategoryController';
import CreateCategoryUseCase from './CreateCategoryUseCase';

const categoryRepository = CategoryRepository.getInstance();
const createCategory = new CreateCategoryUseCase(categoryRepository);
const createCategoryController = new CreateCategoryController(createCategory);

export default createCategoryController;
