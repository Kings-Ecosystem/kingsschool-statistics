import { Permissions } from "../entities/permissions.entity";

export interface IRole {
    id?: string;
    name: string;
    permissions: any;
    description?: string;
    school_id?:string;
    academic_year:string
    is_default:boolean,
}