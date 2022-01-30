import { Router } from "express";

import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";
import { usersRouter } from "./users.routes";

const appRouter = Router();

appRouter.use("/categories", categoriesRouter);
appRouter.use("/specifications", specificationsRouter);
appRouter.use("/users", usersRouter);

export { appRouter };
