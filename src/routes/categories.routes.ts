import { Router } from "express";

import { createCategoryController } from "../modules/cars/controllers/createCategory";
import { listCategoriesController } from "../modules/cars/controllers/listCategories";

const categoriesRoutes = Router();
// const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
