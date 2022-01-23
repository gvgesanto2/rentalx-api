import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (req, res) => {
  const { name, description } = req.body;

  const existingCategory = categoriesRepository.findByName(name);

  if (existingCategory) {
    return res
      .status(400)
      .json({ error: "This category is already registered in the database." });
  }

  categoriesRepository.create({ name, description });

  return res.status(201).send();
});

categoriesRouter.get("/", (req, res) => {
  const allCategories = categoriesRepository.list();

  return res.json(allCategories);
});

export { categoriesRouter };
