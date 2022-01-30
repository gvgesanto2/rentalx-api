import { User } from "../entities/User";
import { ICreateUserDTO } from "./dtos/ICreateUserDTO";

interface IUsersRepository {
  create(dataToCreateUser: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
}

export { IUsersRepository };
