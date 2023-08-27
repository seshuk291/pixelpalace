import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) { }
  
  create(CreateCategoryDto: CreateCategoryDto) {
    return this.categoryRepository.save(CreateCategoryDto);
  }

  findAll() {
    return this.categoryRepository.find();
  }

  findOne(id: number) {
    return this.categoryRepository.findOneBy({ id });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    try {
      let category = await this.findOne(id);
      if (category) {
        return this.categoryRepository.remove(category);
      } else {
        throw new Error("Category not found");
      }
    } catch (error) {
      return error;
    }
  }
}
