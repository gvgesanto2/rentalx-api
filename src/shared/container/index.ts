import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { TypeormCategoriesRepository } from "../../modules/cars/repositories/implementations/TypeormCategoriesRepository";
import { TypeormSpecificationsRepository } from "../../modules/cars/repositories/implementations/TypeormSpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { TypeormUsersRepository } from "../../modules/users/repositories/implementations/TypeormUsersRepository";
import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  TypeormCategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  TypeormSpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  TypeormUsersRepository
);
