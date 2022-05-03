"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeachersService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("../../app.service");
const user_entity_1 = require("../../models/entities/user.entity");
const all_schools_utils_1 = require("../../utils/all-schools.utils");
const cache_utils_1 = require("../../utils/cache.utils");
const typeorm_2 = require("typeorm");
let TeachersService = class TeachersService {
    constructor(users) {
        this.users = users;
    }
    async getAllTeachers() {
        const schools = await (0, all_schools_utils_1.RegisteredSchools)();
        if (schools.length > 0) {
            const all_teachers = await this.users.find({ where: { userType: app_service_1.UserType.staff } });
            if (all_teachers.length > 0) {
                schools.forEach(async (school) => {
                    let teachers = all_teachers.filter(teacher => teacher.school_id == school.id);
                    const stats = await cache_utils_1.CacheManager.get(school.id.toString());
                    stats.statistics.all_teachers = teachers.length;
                    await cache_utils_1.CacheManager.set(school.id, stats);
                });
            }
        }
    }
    async loggedInTeachers(payload) {
        var _a;
        const loggedInTime = new Date(Date.now());
        const schoolStarts = 1;
        const schoolEnds = 18;
        if (loggedInTime.getDay() <= 5) {
            if (loggedInTime.getHours() >= schoolStarts && loggedInTime.getHours() <= schoolEnds) {
                const stats = await cache_utils_1.CacheManager.get(payload.school_id.toString());
                if (stats) {
                    let logged_in_teachers = ((_a = stats === null || stats === void 0 ? void 0 : stats.statistics) === null || _a === void 0 ? void 0 : _a.logged_in_teachers) ? stats.statistics.logged_in_teachers : [];
                    let isInCache = logged_in_teachers.find(teacher => teacher.id == payload.id);
                    if (!isInCache) {
                        logged_in_teachers.push({
                            id: payload.id,
                            username: payload.username,
                            last_login: loggedInTime,
                            profile_photo: payload.profile_photo
                        });
                    }
                    stats.statistics.logged_in_teachers = logged_in_teachers;
                    await cache_utils_1.CacheManager.set(payload.school_id.toString(), stats);
                }
            }
        }
    }
    async resetLoggedInTeachers() {
        const schools = await (0, all_schools_utils_1.RegisteredSchools)();
        const now = new Date(Date.now());
        if (now.getDay() <= 5) {
            schools.forEach(async (school) => {
                var _a;
                const stats = await cache_utils_1.CacheManager.get(school.id.toString());
                if (stats) {
                    let loggedInTeachers = ((_a = stats === null || stats === void 0 ? void 0 : stats.statistics) === null || _a === void 0 ? void 0 : _a.logged_in_teachers) ? stats.statistics.logged_in_teachers : [];
                    let monthly_teacher_attendance = stats.statistics.monthly_teacher_attendance ? stats.statistics.monthly_teacher_attendance : [];
                    loggedInTeachers.forEach(async (teacher) => {
                        const isInCache = monthly_teacher_attendance.find(attendance => attendance.id == teacher.id);
                        if (!isInCache) {
                            monthly_teacher_attendance.push({
                                id: teacher.id,
                                username: teacher.username,
                                logins: [teacher.last_login],
                                profile_photo: teacher.profile_photo,
                                attendance: 1
                            });
                        }
                        else {
                            const index = monthly_teacher_attendance.findIndex(attendance => attendance.id == teacher.id);
                            monthly_teacher_attendance[index].attendance = monthly_teacher_attendance[index].attendance + 1;
                            monthly_teacher_attendance[index].logins.push(teacher.last_login);
                        }
                        stats.statistics.monthly_teacher_attendance = monthly_teacher_attendance;
                        await cache_utils_1.CacheManager.set(school.id.toString(), stats);
                    });
                    stats.statistics.logged_in_teachers = [];
                    await cache_utils_1.CacheManager.set(school.id.toString(), stats);
                }
            });
        }
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeachersService.prototype, "getAllTeachers", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeachersService.prototype, "resetLoggedInTeachers", null);
TeachersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeachersService);
exports.TeachersService = TeachersService;
//# sourceMappingURL=teachers.service.js.map