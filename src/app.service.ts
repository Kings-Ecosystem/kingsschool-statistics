import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export enum UserType {
  admin = "ADMIN",
  learner = "LEARNER",
  staff = "STAFF",
  admin_staff = "ADMINSTAFF",
  super_admin = "SUPERADMIN"
};