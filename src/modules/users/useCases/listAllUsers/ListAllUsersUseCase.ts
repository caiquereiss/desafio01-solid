import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const userIdAlreadyExists = this.usersRepository.findById(user_id);

    if (!userIdAlreadyExists) {
      throw new Error("User is not exists!");
    }

    if (!userIdAlreadyExists.admin) {
      throw new Error("User is not admin!");
    }
    const allUsers = this.usersRepository.list();
    return allUsers;
  }
}

export { ListAllUsersUseCase };
