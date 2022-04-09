import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { AcademicLevels } from "./academic-level.entity";
import { Assignments } from "./assignment.entity";
import { Base } from "./base.entity";
import { Courses } from "./course.entity";

@Entity()
export class Classrooms extends Base {

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  learners?: "json";

  @ManyToMany(() => Courses, courses => courses.classroom)
  courses?: Courses;

  @Column({ nullable: true })
  color?: string

  @ManyToMany(() => Assignments, assignments => assignments.classroom, { nullable: true })
  assignments?: Assignments;

  @ManyToOne(() => AcademicLevels, academic_level => academic_level.classrooms)
  academic_level: AcademicLevels;

  @Column({ nullable: true })
  activities?: "json";

  @Column({ nullable: true })
  exams?: "json";

  @Column({ nullable: true })
  instructors?: "json";
}