import { getRepository, Repository } from "typeorm";

import { User } from "../../entities/User";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class TypeormUsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create(dataToCreateUser: ICreateUserDTO): Promise<void> {
    const newUser = this.repository.create(dataToCreateUser);

    await this.repository.save(newUser);
  }
}

export { TypeormUsersRepository };
