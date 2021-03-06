import Specification from '../../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from '../interfaces/ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification({ name, description });
    this.specifications.push(specification);
    return specification;
  }
  list(): Specification[] {
    return this.specifications;
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );
    return specification;
  }
}

export default SpecificationRepository;
