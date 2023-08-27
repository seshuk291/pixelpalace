import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) { }

  async create(createProduct) {
    let categories;
    if (createProduct?.categories.length) {
      categories = await this.categoryRepository.createQueryBuilder()
        .where("id IN (:...ids)", { ids: createProduct?.categories })
        .getMany();
    }
    createProduct.categories = categories;
    return this.productRepository.save(createProduct);
  }

  findAll(filters) {
    return this.productRepository.find({
      select: {
        categories: filters?.categories,
        name: filters?.name
      },
      relations: {
        categories: true
      }
    });
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where: {
        id
      },
      relations: {
        categories: true
      }
    });
  }

  update(id: number, updateProduct) {
    return this.productRepository.update(id, updateProduct);
  }

  async remove(id: number) {
    try {
      let product = await this.findOne(id);
      if (product) {
        return this.productRepository.remove(product);
      } else {
        throw new Error("Product not found");
      }
    } catch (error) {
      return error;
    }
  }
}
