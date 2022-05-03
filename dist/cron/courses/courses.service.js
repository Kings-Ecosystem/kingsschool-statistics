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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const course_entity_1 = require("../../models/entities/course.entity");
const all_schools_utils_1 = require("../../utils/all-schools.utils");
const cache_utils_1 = require("../../utils/cache.utils");
const typeorm_2 = require("typeorm");
let CoursesService = class CoursesService {
    constructor(courses) {
        this.courses = courses;
    }
    async getAllcourses() {
        const schools = await (0, all_schools_utils_1.RegisteredSchools)();
        if (schools.length > 0) {
            const all_courses = await this.courses.find();
            if (all_courses.length > 0) {
                schools.forEach(async (school) => {
                    let courses = all_courses.filter(course => course.school_id == school.id);
                    const stats = await cache_utils_1.CacheManager.get(school.id);
                    stats.statistics.courses = courses.length;
                    await cache_utils_1.CacheManager.set(school.id, stats);
                });
            }
        }
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_SECONDS),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoursesService.prototype, "getAllcourses", null);
CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(course_entity_1.Courses)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CoursesService);
exports.CoursesService = CoursesService;
//# sourceMappingURL=courses.service.js.map