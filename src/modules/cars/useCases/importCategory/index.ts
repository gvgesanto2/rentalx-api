import { TypeormCategoriesRepository } from "../../repositories/implementations/TypeormCategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export function getImportCategoryController(): ImportCategoryController {
  const categoriesRepository = new TypeormCategoriesRepository();
  const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
  const importCategoryController = new ImportCategoryController(
    importCategoryUseCase
  );
  return importCategoryController;
}
