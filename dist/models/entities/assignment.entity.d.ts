import { AcademicLevels } from "./academic-level.entity";
import { Base } from "./base.entity";
import { Classrooms } from "./classroom.entity";
export declare class Assignments extends Base {
    name: string;
    description: string;
    learners: "json";
    courses: "json";
    assignments: "json";
    activities: "json";
    exams: "json";
    instructors: "json";
    objective: string;
    classroom: Classrooms;
    academic_level: AcademicLevels[];
    course: string;
    attachments: "json";
}
