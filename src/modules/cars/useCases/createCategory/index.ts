import { TypeormCategoriesRepository } from "../../repositories/implementations/TypeormCategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export function getCreateCategoryController(): CreateCategoryController {
  const categoriesRepository = new TypeormCategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryController = new CreateCategoryController(
    createCategoryUseCase
  );

  return createCategoryController;
}
