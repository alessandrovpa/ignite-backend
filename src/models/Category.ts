import { v4 as uuid } from 'uuid';

class Category {
  id?: string;

  name: string;

  description: string;

  created_at?: Date;

  constructor({ name, description }: Category) {
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

export default Category;
