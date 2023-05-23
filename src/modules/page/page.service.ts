import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PageEntity } from './entities/page.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PageService {

  constructor(
    @InjectRepository(PageEntity) private readonly repository: Repository<PageEntity>
  ) { }

  async create(createPageDto: CreatePageDto): Promise<PageEntity> {
    const vNewRecord = this.repository.create(createPageDto);
    return await this.repository.save(vNewRecord);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOneBy({
      id: id
    });
  }

  update(id: number, updatePageDto: UpdatePageDto) {
    return `This action updates a #${id} page`;
  }

  remove(id: number) {
    return `This action removes a #${id} page`;
  }
}
