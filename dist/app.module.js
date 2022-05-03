"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const academic_level_service_1 = require("./cron/academic-level/academic-level.service");
const assignment_service_1 = require("./cron/assignment/assignment.service");
const classroom_service_1 = require("./cron/classroom/classroom.service");
const courses_service_1 = require("./cron/courses/courses.service");
const exam_service_1 = require("./cron/exam/exam.service");
const learners_service_1 = require("./cron/learners/learners.service");
const payment_service_1 = require("./cron/payment/payment.service");
const project_service_1 = require("./cron/project/project.service");
const school_service_1 = require("./cron/school/school.service");
const task_service_1 = require("./cron/task/task.service");
const teachers_service_1 = require("./cron/teachers/teachers.service");
const academic_level_entity_1 = require("./models/entities/academic-level.entity");
const assignment_entity_1 = require("./models/entities/assignment.entity");
const classroom_entity_1 = require("./models/entities/classroom.entity");
const course_entity_1 = require("./models/entities/course.entity");
const exam_entity_1 = require("./models/entities/exam.entity");
const project_entity_1 = require("./models/entities/project.entity");
const task_entity_1 = require("./models/entities/task.entity");
const user_entity_1 = require("./models/entities/user.entity");
const redis_module_1 = require("./redis/redis.module");
const statistics_controller_1 = require("./controllers/statistics/statistics.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([course_entity_1.Courses, user_entity_1.Users, classroom_entity_1.Classrooms, assignment_entity_1.Assignments, task_entity_1.Tasks, exam_entity_1.Exams, project_entity_1.Projects, academic_level_entity_1.AcademicLevels]),
            redis_module_1.RedisModule,
            schedule_1.ScheduleModule.forRoot()
        ],
        controllers: [app_controller_1.AppController, statistics_controller_1.StatisticsController],
        providers: [app_service_1.AppService, courses_service_1.CoursesService,
            learners_service_1.LearnersService,
            teachers_service_1.TeachersService,
            classroom_service_1.ClassroomService,
            exam_service_1.ExamService,
            payment_service_1.PaymentService,
            assignment_service_1.AssignmentService,
            project_service_1.ProjectService,
            task_service_1.TaskService,
            academic_level_service_1.AcademicLevelService,
            school_service_1.SchoolService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map