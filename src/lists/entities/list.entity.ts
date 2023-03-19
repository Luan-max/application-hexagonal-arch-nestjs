import { Column, EntitySchema, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type ListAttributes = {
  name: string;
};

@Entity()
export class List extends EntitySchema<ListAttributes> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
