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
exports.AcademicLevelService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const academic_level_entity_1 = require("../../models/entities/academic-level.entity");
const all_schools_utils_1 = require("../../utils/all-schools.utils");
const cache_utils_1 = require("../../utils/cache.utils");
const typeorm_2 = require("typeorm");
let AcademicLevelService = class AcademicLevelService {
    constructor(academicLevels) {
        this.academicLevels = academicLevels;
    }
    async getAllAcademicLevels() {
        const schools = await (0, all_schools_utils_1.RegisteredSchools)();
        if (schools.length > 0) {
            const all_academicLevels = await this.academicLevels.find();
            if (all_academicLevels.length > 0) {
                schools.forEach(async (school) => {
                    let academicLevels = all_academicLevels.filter(classroom => classroom.school_id == school.id);
                    const stats = await cache_utils_1.CacheManager.get(school.id);
                    stats.statistics.academicLevels = academicLevels.length;
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
], AcademicLevelService.prototype, "getAllAcademicLevels", null);
AcademicLevelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(academic_level_entity_1.AcademicLevels)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AcademicLevelService);
exports.AcademicLevelService = AcademicLevelService;
//# sourceMappingURL=academic-level.service.js.map