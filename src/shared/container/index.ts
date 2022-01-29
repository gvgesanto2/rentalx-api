import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { TypeormCategoriesRepository } from "../../modules/cars/repositories/implementations/TypeormCategoriesRepository";
import { TypeormSpecificationsRepository } from "../../modules/cars/repositories/implementations/TypeormSpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  TypeormCategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  TypeormSpecificationsRepository
);
