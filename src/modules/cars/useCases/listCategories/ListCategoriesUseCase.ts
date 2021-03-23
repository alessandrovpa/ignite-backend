import Category from '../../models/Category';
import { ICategoryRepository } from '../../repositories/interfaces/ICategoryRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export default ListCategoriesUseCase;
