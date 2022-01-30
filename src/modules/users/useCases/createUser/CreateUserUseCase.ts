import { hash } from "bcrypt";
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
    const { email, password } = dataToCreateUser;

    const existingUser = await this.usersRepository.findByEmail(email);

    if (existingUser) {
      throw new Error("This email is already in use.");
    }

    const hashedPassword = await hash(password, 8);

    await this.usersRepository.create({
      ...dataToCreateUser,
      password: hashedPassword,
    });
  }
}

export { CreateUserUseCase };
