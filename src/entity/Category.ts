import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Sub_Category} from "./Sub_Category";
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column('varchar', { length: 50 })
  name: string = "";

  @Column('text', { nullable: true })
  description: string = "";

  @OneToMany(() => Sub_Category, subCategory => subCategory.category, {nullable: true})
  sub_categories?: Sub_Category[];

  @Column({ type: "timestamptz", default: "now()" })
  createdAt: Date = new Date();

  @Column({ type: "timestamptz" })
  updatedAt: Date = new Date();

  @Column({ type: "timestamptz", default: null, nullable: true })
  deletedAt?: Date;

}
