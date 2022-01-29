import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class TypeormCategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const newCategory = this.repository.create({
      name,
      description,
    });

    this.repository.save(newCategory);
  }

  async list(): Promise<Category[]> {
    const allCategories = await this.repository.find();
    return allCategories;
  }

  async findByName(name: string): Promise<Category> {
    const categoryFound = await this.repository.findOne({ name });

    return categoryFound;
  }
}

export { TypeormCategoriesRepository };
