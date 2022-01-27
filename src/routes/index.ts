import { Router } from "express";

import { categoriesRouter } from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";

const appRouter = Router();

appRouter.use("/categories", categoriesRouter);
appRouter.use("/specifications", specificationsRouter);

export { appRouter };
