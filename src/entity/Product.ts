import {Entity, PrimaryGeneratedColumn, Column, Index, getRepository} from "typeorm";

@Entity()
export class Product {

  @PrimaryGeneratedColumn()
  id: number = 0;

  @Index({unique: true})
  @Column('varchar', { length: 500, nullable: true })
  ref: string | null = null;

  @Column('varchar', { length: 50 })
  name: string = "";

  @Column('float')
  price: number = 0;

  @Column('text', { nullable: true })
  description: string = "";

  @Column('int')
  quantity_stock: number = 0;

  @Column('boolean')
  available: boolean = true;

  @Column('int')
  quantity_alert: number = 50;

  @Column({ type: "timestamptz", default: "now()" })
  createdAt: Date = new Date();

  @Column({ type: "timestamptz" })
  updatedAt: Date = new Date();

  @Column({ type: "timestamptz", default: null, nullable: true })
  deletedAt: Date = new Date();
}
