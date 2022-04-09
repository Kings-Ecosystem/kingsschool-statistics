import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn, Column } from "typeorm";
export class Base {

    @PrimaryGeneratedColumn()
    id: string

    @Column({ nullable: false })
    school_id: string;

    @Column({ nullable: false })
    academic_year: string;

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