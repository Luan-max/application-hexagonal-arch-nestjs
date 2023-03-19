import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { ListGatewayTypeORMInterface } from './gateways/list-gateway-typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([List])],
  controllers: [ListsController],
  providers: [
    ListsService,
    ListGatewayTypeORMInterface,
    {
      provide: 'ListGatewayInterface',
      useExisting: ListGatewayTypeORMInterface,
    },
  ],
})
export class ListsModule {}
