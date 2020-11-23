import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Sub_Category {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column('varchar', { length: 50 })
  name: string = "";

  @Column('text', { nullable: true })
  description: string = "";

  @ManyToOne(() => Category, category => category.sub_categories)
  category?: Category;

  @Column({ type: "timestamptz", default: "now()" })
  createdAt: Date = new Date();

  @Column({ type: "timestamptz" })
  updatedAt: Date = new Date();

  @Column({ type: "timestamptz", default: null, nullable: true })
  deletedAt: Date = new Date();

}
