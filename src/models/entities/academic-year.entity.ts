import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class AcademicYears {

  @PrimaryGeneratedColumn()
  id: string

  @Column({ nullable: false })
  school_id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  objectives: "json";

  @Column({ nullable: true })
  budget: number;

  @Column()
  startDate: string;

  @Column({ nullable: false })
  endDate: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: false})
  is_active: boolean;

  @Column({ nullable: true })
  activities: "json";

  @Column({ nullable: true })
  exams: "json";

  @Column({ nullable: true })
  instructors: "json";

  @Column({ nullable: true })
  classroom: "json";

  @Column({ nullable: true })
  attachments: "json";

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