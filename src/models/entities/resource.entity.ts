import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Resources extends Base{
  
    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    parent_id: string;

    @Column({ nullable: true })
    relations: "json"
}