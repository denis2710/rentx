import { ICreateUserDto } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository { 
    create(data: ICreateUserDto): Promise<void>;
    findByEmail(email: string): Promise<User>

}

export { IUserRepository }