import { ISchool } from "./school.interface";
export interface IUser {
    id: string;
    sign_in_type?: string;
    last_login?: string;
    last_login_ip?: string;
    last_login_location?: 'json';
    username: string;
    first_name?: string;
    email?: string;
    last_name?: string;
    about?: string;
    gender?: string;
    role?: string;
    status?: string;
    password?: string;
    app_user_id: string;
    refresh_token?: string;
    category_id?: string;
    phone_number: string;
    address: string;
    permissions?: 'json';
    userType: string;
    remember?: boolean;
    academic_year: string;
    profile_photo: string;
    school_id: string;
    school?: ISchool;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
}
export declare enum UserType {
    admin = "ADMIN",
    learner = "LEARNER",
    staff = "STAFF",
    admin_staff = "ADMINSTAFF",
    super_admin = "SUPERADMIN"
}
