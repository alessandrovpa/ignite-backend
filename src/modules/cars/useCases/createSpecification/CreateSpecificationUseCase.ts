import Specification from '../../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../../repositories/interfaces/ISpecificationRepository';

class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }
  execute({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export default CreateSpecificationUseCase;
