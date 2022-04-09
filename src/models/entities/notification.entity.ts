import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Notifications extends Base {

  @Column()
  type?: string;

  @Column()
  sender?: string;

  @Column()
  reciepient?: string;

  @Column()
  message?: string

  @Column({ type: String, default: "" })
  description?: string;
}