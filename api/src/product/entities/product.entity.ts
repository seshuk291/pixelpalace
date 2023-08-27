import { Category } from "src/category/entities/category.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("product")
export class Product {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;
    
    @Column()
    description:string;
    
    @Column({type:"float"})
    price:number;
    
    @Column()
    image:string;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[]
}
