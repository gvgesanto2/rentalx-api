import { TypeormCategoriesRepository } from "../../repositories/implementations/TypeormCategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

export function getListCategoriesController(): ListCategoriesController {
  const categoriesRepository = new TypeormCategoriesRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  );

  return listCategoriesController;
}
