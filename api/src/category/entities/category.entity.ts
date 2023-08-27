import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity("category")
export class Category {
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column()
    name:string;
    
    @Column()
    description:string;

    @ManyToMany(() => Product, product => product.categories)
    products: Product[]
}
