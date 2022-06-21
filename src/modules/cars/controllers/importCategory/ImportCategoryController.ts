import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  public handle(request: Request, response: Response) {
    const { file } = request;

    this.importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
