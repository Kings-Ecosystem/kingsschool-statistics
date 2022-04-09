import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Roles extends Base {

    @Column({ unique: false, nullable: false })
    name: string;

    @Column({ type: String, default: `` })
    description?: string;

    @Column({ type: Boolean, default: false })
    is_default: boolean;

    @Column("simple-array")
    permissions: string[];
}