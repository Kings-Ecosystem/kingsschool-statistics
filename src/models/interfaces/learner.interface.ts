import { IBase } from "./base.interface";
import { IUser } from "./user.interface";

export interface ILearner extends IBase, IUser {
   
    assignments: 'json';

    activities: 'json';

    courses: 'json';

    exams: 'json';

    messages: 'json';

    notifications: 'json';

    level: string;

    payments: 'json';

    performanceStats: 'json';

    attendance: 'json';

    timetable: 'json';

    fathers_name: string

    mothers_name: string

    guardian: string

    contact_phone: string;
    
    academic_year: string;

    cv: string;

    ratings: 'json';

    follows: 'json';

    tutorials: 'json'

}