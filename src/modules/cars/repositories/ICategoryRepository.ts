import { Category } from "../infra/typeorm/entites/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}


interface ICategoryRepository { 
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({name, description}: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO}