import { inject, injectable } from "tsyringe";

import { defaultUploadPath } from "../../../../config/upload";
import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  userId: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ userId, avatarFile }: IRequest): Promise<void> {
    const userFound = await this.usersRepository.findById(userId);

    if (userFound.avatar) {
      await deleteFile(`${defaultUploadPath}/avatar/${userFound.avatar}`);
    }

    userFound.avatar = avatarFile;

    await this.usersRepository.create(userFound);
  }
}

export { UpdateUserAvatarUseCase };
