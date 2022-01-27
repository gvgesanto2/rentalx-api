import { Router } from "express";

import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRouter = Router();

specificationsRouter.post("/", (req, res) => {
  return createSpecificationController.handle(req, res);
});

export { specificationsRouter };
