import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      const allUsers = this.listAllUsersUseCase.execute({ user_id } as {
        user_id: string;
      });

      return response.status(200).json(allUsers);
    } catch (err) {
      return response.status(400).json({
        error: err.message,
      });
    }
  }
}

export { ListAllUsersController };
