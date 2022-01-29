import { Router } from "express";
import multer from "multer";

import { getCreateCategoryController } from "../modules/cars/useCases/createCategory";
import { getImportCategoryController } from "../modules/cars/useCases/importCategory";
import { getListCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRouter = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRouter.post("/", (req, res) => {
  return getCreateCategoryController().handle(req, res);
});

categoriesRouter.get("/", (req, res) => {
  return getListCategoriesController().handle(req, res);
});

categoriesRouter.post("/import", upload.single("file"), (req, res) => {
  return getImportCategoryController().handle(req, res);
});

export { categoriesRouter };
