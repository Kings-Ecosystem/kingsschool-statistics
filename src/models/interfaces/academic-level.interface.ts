import { IBase } from "./base.interface";


export interface IAcademicLevel extends IBase {
    name: string;
    description: string;
    code: string;
    level:string;
    learners: any;
    objectives: any;
    courses: any;
    assignments: any;
    activities: any;
    exams: any;
    instructors: any;
    classrooms: any;
}