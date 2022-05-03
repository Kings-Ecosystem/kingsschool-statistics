import { Activities } from "./activity.entity";
import { Assignments } from "./assignment.entity";
import { Base } from "./base.entity";
import { Classrooms } from "./classroom.entity";
import { Courses } from "./course.entity";
export declare class AcademicLevels extends Base {
    name: string;
    level: string;
    description: string;
    code: string;
    learners: "json";
    objectives: "json";
    courses: Courses[];
    assignments: Assignments[];
    activities: Activities[];
    exams: "json";
    instructors: "json";
    classrooms: Classrooms[];
}
