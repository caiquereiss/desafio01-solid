import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findById(user_id);
    if (!userAlreadyExists) {
      throw new Error("User not exists!");
    }
    const userAdmin = this.usersRepository.turnAdmin(userAlreadyExists);
    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
