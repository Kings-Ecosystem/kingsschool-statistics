import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AcademicLevelService } from './cron/academic-level/academic-level.service';
import { AssignmentService } from './cron/assignment/assignment.service';
import { ClassroomService } from './cron/classroom/classroom.service';
import { CoursesService } from './cron/courses/courses.service';
import { ExamService } from './cron/exam/exam.service';
import { LearnersService } from './cron/learners/learners.service';
import { PaymentService } from './cron/payment/payment.service';
import { ProjectService } from './cron/project/project.service';
import { SchoolService } from './cron/school/school.service';
import { TaskService } from './cron/task/task.service';
import { TeachersService } from './cron/teachers/teachers.service';
import { AcademicLevels } from './models/entities/academic-level.entity';
import { Assignments } from './models/entities/assignment.entity';
import { Classrooms } from './models/entities/classroom.entity';
import { Courses } from './models/entities/course.entity';
import { Exams } from './models/entities/exam.entity';
import { Projects } from './models/entities/project.entity';
import { Tasks } from './models/entities/task.entity';
import { Users } from './models/entities/user.entity';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Courses, Users, Classrooms, Assignments, Tasks, Exams, Projects, AcademicLevels]),
    RedisModule,
    ScheduleModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, CoursesService,
    LearnersService,
    TeachersService,
    ClassroomService,
    ExamService,
    PaymentService,
    AssignmentService,
    ProjectService,
    TaskService,
    AcademicLevelService,
    SchoolService]
})
export class AppModule {}
