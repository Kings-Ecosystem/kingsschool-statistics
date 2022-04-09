import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { AcademicLevels } from "./academic-level.entity";
import { Base } from "./base.entity";
import { Classrooms } from "./classroom.entity";
import { Courses } from "./course.entity";

@Entity()
export class Assignments extends Base {

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  learners: "json";

  @Column()
  courses: "json";

  @Column()
  assignments: "json";

  @Column()
  activities: "json";

  @Column()
  exams: "json";

  @Column()
  instructors: "json";

  @Column()
  objective: string;

  @ManyToMany(() => Classrooms, classroom => classroom.assignments)
  @JoinTable()
  classroom: Classrooms;

  @ManyToMany(() => AcademicLevels, academic_level => academic_level.assignments)
  @JoinTable()
  academic_level: AcademicLevels[];

  @Column()
  course: string;

  @Column()
  attachments: "json";
}