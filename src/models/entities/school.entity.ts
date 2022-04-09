import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SchoolTypes } from "../interfaces/school.interface";

@Entity()
export class Schools{

    @PrimaryGeneratedColumn()
    id: string

    @Column({ unique: true })
    name: string;

    @Column({ type: String, default: false, nullable: false, unique: true })
    contact_email: string;

    @Column({ type: String, nullable: false })
    address: string;

    @Column({ type: String, nullable: false })
    logo: string;

    @Column({ type: String, nullable: false })
    contact_phone: string;

    @Column({ type: String, default: `` })
    description?: string;

    @Column({ type: String, nullable: false })
    type: SchoolTypes;

    @Column({ type: String, nullable: true })
    parent_id?: string;

    @Column({ nullable: false })
    owner_id: string;

    @CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        comment: 'creation time',
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        comment: 'last update time',
    })
    updatedAt: Date;

    @DeleteDateColumn({
        type: 'timestamp',
        name: 'delete_at',
        comment: 'Delete',
    })
    deleteAt: Date;

}