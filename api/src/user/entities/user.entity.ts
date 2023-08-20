import { Address } from "src/address/entities/address.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column()
    email:string;
    
    @Column()
    password:string;
    
    @OneToMany(() => Address, address => address.fk_user_id)
    addresses: Address[];
}
