import { Repository } from "typeorm";
import { Permissions } from "../entities/permissions.entity";
import { Roles } from "../entities/role.entity";

export interface IResource {
    name?: string;
    description?: string;
    owner_id?: string;
    parent_id?: string;
    relations?: [{
        entityName: Repository<resourceTypes>,
        ids: string[]
    }]
    created_At?: Date;
    updated_At?: Date;
}

export type resourceTypes = Permissions | Roles;