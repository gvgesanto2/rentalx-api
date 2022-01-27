import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRouter = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRouter.post("/", (req, res) => {
  const { name, description } = req.body;

  const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
  );

  createSpecificationUseCase.execute({ name, description });

  return res.status(201).send();
});

export { specificationsRouter };
