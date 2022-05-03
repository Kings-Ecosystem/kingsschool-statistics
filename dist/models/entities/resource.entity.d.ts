import { Base } from "./base.entity";
export declare class Resources extends Base {
    name: string;
    description: string;
    parent_id: string;
    relations: "json";
}
