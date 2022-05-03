import { Base } from "./base.entity";
export declare class Exams extends Base {
    name: string;
    description: string;
    learners: "json";
    instructors: "json";
    supervisors: "json";
}
