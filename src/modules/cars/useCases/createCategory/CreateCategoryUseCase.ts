import Category from '../../models/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../../repositories/interfaces/ICategoryRepository';

class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  execute({ name, description }: ICreateCategoryDTO): Category {
    const verifyExistCategory = this.categoryRepository.findByName(name);
    if (verifyExistCategory) {
      throw new Error(`Category already exists`);
    }

    const category = this.categoryRepository.create({ name, description });

    return category;
  }
}

export default CreateCategoryUseCase;
