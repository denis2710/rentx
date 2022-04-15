interface ICreateUserDto { 
    id?: string;
    name: string;
    password: string;
    email: string;
    driver_licence: string;
    avatar?: string;
}
export { ICreateUserDto }