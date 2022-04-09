import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { Activities } from "./activity.entity";
import { Assignments } from "./assignment.entity";
import { Base } from "./base.entity";
import { Classrooms } from "./classroom.entity";
import { Courses } from "./course.entity";

@Entity()
export class AcademicLevels extends Base {

  @Column()
  name: string;

  @Column()
  level: string;

  @Column()
  description: string;

  @Column({nullable: true })
  code: string

  @Column({nullable: true })
  learners: "json";

  @Column({nullable: true })
  objectives: "json";

  @ManyToMany(() => Courses, courses => courses.academic_level)
  courses: Courses[];

  @ManyToMany(() => Assignments, assignments => assignments.academic_level)
  assignments: Assignments[];

  @ManyToMany(() => Activities, activities => activities.academic_level)
  activities: Activities[];

  @Column({nullable: true })
  exams: "json";

  @Column({nullable: true })
  instructors: "json";

  @OneToMany(()=>Classrooms, classrooms=>classrooms.academic_level)
  classrooms: Classrooms[];

}