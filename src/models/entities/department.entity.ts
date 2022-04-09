import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Departments extends Base {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  objective: string;

  @Column()
  hod: string;

  @Column()
  activities: string;
}