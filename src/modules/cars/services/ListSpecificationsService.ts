import Specification from '../models/Specification';
import { ISpecificationRepository } from '../repositories/interfaces/ISpecificationRepository';

class ListSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {
    this.specificationRepository = specificationRepository;
  }
  execute(): Specification[] {
    const specifications = this.specificationRepository.list();
    return specifications;
  }
}

export default ListSpecificationService;
