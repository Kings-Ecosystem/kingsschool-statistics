import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { AcademicLevels } from "./academic-level.entity";
import { Base } from "./base.entity";

@Entity()
export class Activities extends Base {
  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  objective: string;

  @Column()
  startDate: string;

  @ManyToMany(() => AcademicLevels, academic_level => academic_level.activities)
  @JoinTable()
  academic_level: AcademicLevels[];

  @Column()
  endDate: string;
}