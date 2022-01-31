import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const existingUser = await this.usersRepository.findByEmail(email);

    if (!existingUser) {
      throw new AppError("Email or password incorrect!");
    }

    const isPasswordMatched = await compare(password, existingUser.password);

    if (!isPasswordMatched) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "umasenhadeteste", {
      subject: existingUser.id,
      expiresIn: "1d",
    });

    return {
      user: {
        name: existingUser.name,
        email: existingUser.email,
      },
      token,
    };
  }
}

export { AuthenticateUserUseCase };
