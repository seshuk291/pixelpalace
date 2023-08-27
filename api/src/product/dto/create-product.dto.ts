export class CreateProductDto {
    name:string;
    description:string;
    image:string;
    price:number;
    categories: Array<number>;
}