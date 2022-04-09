import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Permissions{

  @PrimaryGeneratedColumn()
  id: string

  @Column({ unique: true })
  name: string;

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

  @Column({ type: String, default: "" })
  description?: string;

}