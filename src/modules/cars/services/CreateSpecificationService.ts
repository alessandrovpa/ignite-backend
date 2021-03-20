import Specification from '../models/Specification';
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from '../repositories/interfaces/ISpecificationRepository';

class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }
  execute({ name, description }: ICreateSpecificationDTO): Specification {
    const verifyExistSpecification = this.specificationRepository.findByName(
      name,
    );
    if (verifyExistSpecification) {
      throw new Error(`Specification already exists`);
    }

    const specification = this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export default CreateSpecificationService;
