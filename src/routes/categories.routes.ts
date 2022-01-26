import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "../modules/cars/useCases/createCategoryUseCase/CreateCategoryUseCase";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

  createCategoryUseCase.execute({ name, description });

  return res.status(201).send();
});

categoriesRouter.get("/", (req, res) => {
  const allCategories = categoriesRepository.list();

  return res.json(allCategories);
});

export { categoriesRouter };
