import { Inject, Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { ListModel } from './entities/list.model';
import { ListGatewayInterface } from './gateways/list-gateway-interface';

@Injectable()
export class ListsService {
  constructor(
    @Inject('ListGatewayInterface')
    private listGateway: ListGatewayInterface,
  ) {}

  async create(createListDto: CreateListDto) {
    const list = new ListModel(createListDto.name);
    const create = await this.listGateway.create(list);

    return create;
  }

  async findAll() {
    const list = await this.listGateway.findAll();

    return list;
  }

  async findOne(id: number) {
    return await this.listGateway.findById(id);
  }
}
