import { ListsService } from './lists.service';
import { ListGatewayInMemory } from './gateways/list-gateway-in-memory';

describe('ListsService', () => {
  let service: ListsService;
  let listPersistenceGateway: ListGatewayInMemory;

  beforeEach(() => {
    listPersistenceGateway = new ListGatewayInMemory();
    service = new ListsService(listPersistenceGateway);
  });

  it('when create a list', async () => {
    const list = await service.create({ name: 'my list' });
    expect(listPersistenceGateway.items).toEqual([list]);
  });

  it('when find all lists', async () => {
    const list = await service.findAll();
    expect(listPersistenceGateway.items).toEqual(list);
  });

  it('when find one a list', async () => {
    await service.findOne(1);
    expect(listPersistenceGateway.items).toEqual([]);
  });
});
