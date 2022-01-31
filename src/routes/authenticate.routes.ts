import { Router } from "express";

import { AuthenticateUserController } from "../modules/users/useCases/authenticateUser/AuthenticateUserController";

const authenticateRouter = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRouter.post("/login", authenticateUserController.handle);

export { authenticateRouter };
