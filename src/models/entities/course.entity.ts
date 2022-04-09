import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { AcademicLevels } from "./academic-level.entity";
import { Base } from "./base.entity";
import { Classrooms } from "./classroom.entity";

@Entity()
export class Courses extends Base {

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    credit_value: string;

    @Column()
    short_form: string;

    @Column()
    pass_mark: string;

    @Column({ nullable: true})
    course_codes: "json";

    @Column({ nullable: true })
    learners: "json";

    @Column({ nullable: true })
    assignments: "json";

    @Column({ nullable: true })
    exams: "json";

    @Column({ nullable: true })
    instructors: "json";

    @Column({ nullable: true })
    other_properties: "json";

    @ManyToMany(() => Classrooms, classroom => classroom.courses)
    @JoinTable()
    classroom: Classrooms[];

    @ManyToMany(() => AcademicLevels, academic_level => academic_level.courses,{cascade: true})
    @JoinTable()
    academic_level: AcademicLevels[]
}