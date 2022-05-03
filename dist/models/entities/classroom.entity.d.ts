import { AcademicLevels } from "./academic-level.entity";
import { Assignments } from "./assignment.entity";
import { Base } from "./base.entity";
import { Courses } from "./course.entity";
export declare class Classrooms extends Base {
    name: string;
    description: string;
    learners?: "json";
    courses?: Courses;
    color?: string;
    assignments?: Assignments;
    academic_level: AcademicLevels;
    activities?: "json";
    exams?: "json";
    instructors?: "json";
}
