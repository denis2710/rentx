import { AppError } from '@errors/AppError';
import { ICreateUserDto } from "../dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../repositories/in-memory/UserRepositoryInMemory";
import { IUserRepository } from "../repositories/IUserRepository";
import { CreateUserUseCase } from "../useCases/CreateUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

describe("Authenticate User", () => {

    let authenticateUserUseCase: AuthenticateUserUseCase;
    let userRepositoryInMemory: IUserRepository;
    let createUserUseCase: CreateUserUseCase;

    beforeEach(() => {
        userRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(userRepositoryInMemory)
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory)
    })

    it("Should be able to authenticate a user", async () => {

        const user: ICreateUserDto = {
            driver_licence: "000123", 
            email: "user@example.com",
            password: "1234",
            name:  "user test"
        }

        await createUserUseCase.execute(user)

        const result = await authenticateUserUseCase.execute({
            email: user.email, 
            password: user.password
        })        

        expect(result).toHaveProperty("token")

    })

    it("Should be not able to authenticate a nonexistent user ", async () => {

        expect(async ()=>{
              
            await authenticateUserUseCase.execute({
                email: 'false@email.com', 
                password: '1234'
            })    

        }).rejects.toBeInstanceOf(AppError)

    })

    it("Should be not able to authenticate a user with wrong password ", async () => {

        expect(async ()=>{
            const user: ICreateUserDto = {
                driver_licence: "000123", 
                email: "user@example.com",
                password: "1234",
                name:  "user test"
            }
    
            await createUserUseCase.execute(user)
    
            await authenticateUserUseCase.execute({
                email: user.email, 
                password: '5678'
            })    

        }).rejects.toBeInstanceOf(AppError)

    })
})