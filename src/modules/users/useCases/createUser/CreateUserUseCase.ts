import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../repositories/dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(dataToCreateUser: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create(dataToCreateUser);
  }
}

export { CreateUserUseCase };
