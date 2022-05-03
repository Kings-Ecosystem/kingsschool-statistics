import { AcademicLevels } from "./academic-level.entity";
import { Base } from "./base.entity";
import { Classrooms } from "./classroom.entity";
export declare class Courses extends Base {
    title: string;
    description: string;
    credit_value: string;
    short_form: string;
    pass_mark: string;
    course_codes: "json";
    learners: "json";
    assignments: "json";
    exams: "json";
    instructors: "json";
    other_properties: "json";
    classroom: Classrooms[];
    academic_level: AcademicLevels[];
}
