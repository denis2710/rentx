import { Repository } from "typeorm";
import { appDataSource } from "../../../../database";
import { ICreateUserDto } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;

    constructor(){
        this.repository = appDataSource.getRepository(User)
    }

    async create({name, email, password, driver_licence}: ICreateUserDto): Promise<void> {
        
        const user = this.repository.create({
            name, 
            email, 
            password, 
            driver_licence,
            is_admin: false
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