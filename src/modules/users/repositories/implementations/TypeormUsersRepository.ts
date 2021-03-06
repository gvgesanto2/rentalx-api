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

  async findByEmail(email: string): Promise<User> {
    const userFound = this.repository.findOne({
      email,
    });
    return userFound;
  }

  async findById(userId: string): Promise<User> {
    const userFound = await this.repository.findOne(userId);
    return userFound;
  }
}

export { TypeormUsersRepository };
