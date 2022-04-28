import { Repository } from "typeorm";
import { appDataSource } from "@shared/infra/typeorm";
import { ICreateUserDto } from "../../../dtos/ICreateUserDTO";
import { User } from "../entities/User";
import { IUserRepository } from "../../../repositories/IUserRepository";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor(){
        this.repository = appDataSource.getRepository(User)
    }

    async create({id, name, email, password, driver_licence, avatar}: ICreateUserDto): Promise<void> {
        
        const user = this.repository.create({
            id,
            name, 
            email, 
            password, 
            driver_licence,
            is_admin: false,
            avatar,
        })

        await this.repository.save(user)
    } 

    async findByEmail(email: string): Promise<User> { 
        const user = this.repository.findOneBy({email})
        return user
    }

    async findById(id: string): Promise<User> { 
        const user = this.repository.findOneBy({id})
        return user
    }
    

}

export { UserRepository } 