import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/users/useCases/updateUserAvatar/UpdateUserAvatarController";

const usersRouter = Router();

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const uploadAvatarMulter = multer(uploadConfig.upload("avatar"));

usersRouter.post("/", createUserController.handle);
usersRouter.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatarMulter.single("avatarFile"),
  updateUserAvatarController.handle
);

export { usersRouter };
