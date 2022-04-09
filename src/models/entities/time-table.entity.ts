import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class TimeTables extends Base {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  objective: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}