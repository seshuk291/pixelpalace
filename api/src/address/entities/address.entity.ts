import { Users } from "src/user/entities/user.entity";

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("address")
export class Address {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    fk_user_id:number;

    @Column()
    street_address:string;

    @Column()
    city:string;

    @Column()
    state:string;
    
    @Column()
    zip:string;
}