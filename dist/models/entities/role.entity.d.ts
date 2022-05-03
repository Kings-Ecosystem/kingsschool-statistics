import { Base } from "./base.entity";
export declare class Roles extends Base {
    name: string;
    description?: string;
    is_default: boolean;
    permissions: string[];
}
