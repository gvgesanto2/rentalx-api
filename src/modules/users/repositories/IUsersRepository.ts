import { ICreateUserDTO } from "./dtos/ICreateUserDTO";

interface IUsersRepository {
  create(dataToCreateUser: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
