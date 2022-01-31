import { Router } from "express";

import { authenticateRouter } from "./authenticate.routes";
import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";
import { usersRouter } from "./users.routes";

const appRouter = Router();

appRouter.use("/categories", categoriesRouter);
appRouter.use("/specifications", specificationsRouter);
appRouter.use("/users", usersRouter);
appRouter.use("/auth", authenticateRouter);

export { appRouter };
