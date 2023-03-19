import { ListModel } from '../entities/list.model';
import { ListGatewayInterface } from './list-gateway-interface';

export class ListGatewayInMemory implements ListGatewayInterface {
  items: ListModel[] = [];
  async create(list: ListModel): Promise<ListModel> {
    list.id = this.items.length + 1;
    this.items.push(list);
    return list;
  }
  async findAll(): Promise<ListModel[]> {
    return this.items;
  }
  async findById(id: number): Promise<ListModel> {
    const list = this.items.find((item) => item.id === id);
    return list;
  }
}
