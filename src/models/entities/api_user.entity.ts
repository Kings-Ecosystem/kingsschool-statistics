import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class APIUser {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ type: String })
  api_key?: string;

  @Column({ type: String })
  api_user?: string;

  @Column({ type: String })
  api_secret?: string;

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