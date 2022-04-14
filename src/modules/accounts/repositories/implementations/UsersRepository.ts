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

    async create({name, username, email, password, driver_licence}: ICreateUserDto): Promise<void> {
        
        const user = this.repository.create({
            name, 
            username, 
            email, 
            password, 
            driver_licence,
            is_admin: false
        })

        await this.repository.save(user)
    } 

    async findByUsername(username: string): Promise<User> { 
        const user = this.repository.findOneBy({username})
        return user
    }
    

}

export { UserRepository } 