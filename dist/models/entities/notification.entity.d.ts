import { Base } from "./base.entity";
export declare class Notifications extends Base {
    type?: string;
    sender?: string;
    reciepient?: string;
    message?: string;
    description?: string;
}
