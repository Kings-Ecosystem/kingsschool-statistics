import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Exams extends Base{
  
    @Column()
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    learners: "json";

    @Column()
    instructors: "json";

    @Column()
    supervisors: "json";
}