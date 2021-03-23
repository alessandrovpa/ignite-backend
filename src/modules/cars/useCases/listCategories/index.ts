import CategoryRepository from '../../repositories/implementations/CategoryRepository';
import ListCategoriesController from './ListCategoriesController';
import ListCategoriesUseCase from './ListCategoriesUseCase';

const categoryRepository = CategoryRepository.getInstance();
const listCategories = new ListCategoriesUseCase(categoryRepository);
const listCategoiresController = new ListCategoriesController(listCategories);

export default listCategoiresController;
