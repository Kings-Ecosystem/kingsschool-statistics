import { IBase } from "./base.interface";
export interface ICourse extends IBase {
    title: string;
    course_code: string;
    credit_value: string;
    short_form: string;
    pass_mark: string;
    description: string;
    learners: any;
    assignments: any;
    exams: any;
    instructors: any;
    academic_level: any;
}
