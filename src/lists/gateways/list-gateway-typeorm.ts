import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from '../entities/list.entity';
import { ListGatewayInterface } from './list-gateway-interface';

@Injectable()
export class ListGatewayTypeORMInterface implements ListGatewayInterface {
  constructor(
    @InjectRepository(List) private listRepository: Repository<List>,
  ) {}
  async create(list: List): Promise<List> {
    const newList = await this.listRepository.save(list);
    return newList;
  }

  async findAll(): Promise<List[]> {
    const list = await this.listRepository.find();
    return list;
  }
  async findById(id: number): Promise<List> {
    const list = await this.listRepository.findOneOrFail({ where: { id } });
    return list;
  }
}
