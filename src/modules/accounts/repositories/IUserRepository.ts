import { ICreateUserDto } from "../dtos/ICreateUserDTO";

interface IUserRepository { 
    create(data: ICreateUserDto): Promise<void>;

}

export { IUserRepository }