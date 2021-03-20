import { v4 as uuid } from 'uuid';

class Specification {
  id?: string;

  name: string;

  description: string;

  created_at?: Date;

  constructor({ name, description }: Specification) {
    if (!this.id) {
      this.id = uuid();
    }

    this.name = name;

    this.description = description;

    if (!this.created_at) {
      this.created_at = new Date();
    }
  }
}

export default Specification;
