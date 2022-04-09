import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class Users {

  @PrimaryGeneratedColumn()
  id: string

  @Column({ nullable: true })
  sign_in_type?: string;

  @Column({ nullable: true, name: "last_login", type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
  last_login?: string;

  @Column({ nullable: true })
  last_login_ip?: string;

  @Column({ nullable: true })
  last_login_location?: 'json';

  @Column({nullable:false, unique: false })
  username: string;

  @Column({ nullable: true })
  first_name?: string;

  @Column({ nullable:false, unique: false })
  email?: string;

  @Column({ nullable: true })
  last_name?: string;

  @Column({ nullable: true })
  about?: string;

  @Column({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  role?: string;

  @Column({ nullable: true })
  status?: string;

  @Column()
  password?: string;

  @Column({ nullable: true })
  app_user_id: string;

  @Column({ nullable: true })
  refresh_token?: string

  @Column({ nullable: true })
  category_id?: string

  @Column({ nullable: true })
  phone_number: string

  @Column({ nullable: true })
  address: string

  @Column({ nullable: true })
  permissions?: 'json'

  @Column({ nullable: true })
  userType: string;

  @Column({ nullable: true })
  remember?: boolean

  @Column({ nullable: true })
  assignments: 'json';

  @Column({ nullable: true })
  activities: 'json';

  @Column({ nullable: true })
  courses: 'json';

  @Column({ nullable: true })
  exams: 'json';

  @Column({ nullable: true })
  messages: 'json';

  @Column({ nullable: true })
  notifications: 'json';

  @Column({ nullable: true })
  level: string;

  @Column({ nullable: true })
  payments: 'json';

  @Column({ nullable: true })
  performanceStats: 'json';

  @Column({ nullable: true })
  attendance: 'json';

  @Column({ nullable: true })
  timetable: 'json';

  @Column({ nullable: true })
  fathers_name: string

  @Column({ nullable: true })
  mothers_name: string

  @Column({ nullable: true })
  guardian: string

  @Column({ nullable: true })
  contact_phone: string;

  @Column({ nullable: true })
  cv: string;

  @Column({ nullable: true })
  ratings: 'json';

  @Column({ nullable: true })
  follows: 'json';

  @Column({ nullable: true })
  tutorials: 'json'

  @Column({ nullable: true })
  profile_photo: string

  @Column({ nullable: true })
  school_id: string

  @Column({ nullable: true })
  academic_year: string

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