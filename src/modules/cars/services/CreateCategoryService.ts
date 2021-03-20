import Category from '../models/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../repositories/interfaces/ICategoryRepository';

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoryRepository) {
    this.categoriesRepository = categoriesRepository;
  }

  execute({ name, description }: ICreateCategoryDTO): Category {
    const verifyExistCategory = this.categoriesRepository.findByName(name);
    if (verifyExistCategory) {
      throw new Error(`Category already exists`);
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}

export default CreateCategoryService;
