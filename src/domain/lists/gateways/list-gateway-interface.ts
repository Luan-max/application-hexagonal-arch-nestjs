import { ListModel } from '../entities/list.model';

export interface ListGatewayInterface {
  create(list: ListModel): Promise<ListModel>;
  findAll(): Promise<ListModel[]>;
  findById(id: number): Promise<ListModel>;
}
