import { CreateDateColumn } from 'typeorm';
import { Column } from 'typeorm';
import { PrimaryColumn } from 'typeorm';
import { Entity } from 'typeorm';
import {v4 as uuidv4} from 'uuid';

@Entity("users")
class User {
    
    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    driver_licence: string;

    @Column()
    is_admin: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor(){ 
        if(!this.id){ 
            this.id = uuidv4()
        }
    }

}

export { User }