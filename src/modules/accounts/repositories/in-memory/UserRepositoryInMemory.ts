import { ICreateUserDto } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UsersRepositoryInMemory implements IUserRepository {

    users: User[] = [];

    async create({driver_licence, email, name, password}: ICreateUserDto): Promise<void> {
        const user = new User(); 

        Object.assign(user, {
            driver_licence, 
            email, 
            name, 
            password
        });

        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find(u => u.email === email)
    }

    async findById(id: string): Promise<User> {
        return this.users.find(u => u.id === id)
    }
    
 }

export { UsersRepositoryInMemory }