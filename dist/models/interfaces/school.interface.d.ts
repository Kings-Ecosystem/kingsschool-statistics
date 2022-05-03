export interface ISchool {
    id?: string;
    name: string;
    contact_email: string;
    address: string;
    logo: string;
    contact_phone: string;
    description?: string;
    type: SchoolTypes;
    parent_id?: string;
    owner_id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    deleteAt?: Date;
}
export declare type SchoolTypes = {
    PRIMARY: "PRIMARY";
    SECONDARY: "SECONDARY";
    HIGHER: "HIGHER";
};
