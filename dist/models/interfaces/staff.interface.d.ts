import { IUser } from "./user.interface";
export interface IStaff extends IUser {
    classrooms: 'json';
    baseSalary: number;
    benefits: 'json';
    monthly_salary: number;
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
    fathers_name: string;
    mothers_name: string;
    guardian: string;
    contact_phone: string;
    cv: string;
    ratings: 'json';
    follows: 'json';
    tutorials: 'json';
}
