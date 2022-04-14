import { ICreateUserDto } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository { 
    create(data: ICreateUserDto): Promise<void>;
    findByUsername(name: string): Promise<User>

}

export { IUserRepository }