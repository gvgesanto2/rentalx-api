import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class TypeormSpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create(
    dataToCreateSpecification: ICreateSpecificationDTO
  ): Promise<void> {
    const newSpecification = this.repository.create(dataToCreateSpecification);

    await this.repository.save(newSpecification);
  }

  async findByName(name: string): Promise<Specification> {
    const specificationFound = this.repository.findOne({
      name,
    });

    return specificationFound;
  }
}

export { TypeormSpecificationsRepository };
