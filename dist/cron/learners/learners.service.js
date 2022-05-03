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
exports.LearnersService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("../../app.service");
const user_entity_1 = require("../../models/entities/user.entity");
const all_schools_utils_1 = require("../../utils/all-schools.utils");
const cache_utils_1 = require("../../utils/cache.utils");
const typeorm_2 = require("typeorm");
let LearnersService = class LearnersService {
    constructor(users) {
        this.users = users;
    }
    async getAllLearners() {
        const schools = await (0, all_schools_utils_1.RegisteredSchools)();
        if (schools.length > 0) {
            const all_learners = await this.users.find({ where: { userType: app_service_1.UserType.learner } });
            if (all_learners.length > 0) {
                schools.forEach(async (school) => {
                    let learners = all_learners.filter(learner => learner.school_id == school.id);
                    const stats = await cache_utils_1.CacheManager.get(school.id);
                    stats.statistics.all_learners = learners.length;
                    await cache_utils_1.CacheManager.set(school.id, stats);
                });
            }
        }
    }
    async getActiveLearners() {
        const schools = await (0, all_schools_utils_1.RegisteredSchools)();
        if (schools.length > 0) {
            const all_learners = await this.users.find({ where: { userType: app_service_1.UserType.learner } });
            if (all_learners.length > 0) {
                schools.forEach(async (school) => {
                    let learners = all_learners.filter(learner => learner.school_id == school.id);
                    const stats = await cache_utils_1.CacheManager.get(school.id);
                    stats.statistics.active_learners = learners.filter(learner => learner.status == 'active').length;
                    await cache_utils_1.CacheManager.set(school.id, stats);
                });
            }
        }
    }
    async getInactiveLearners() {
        const schools = await (0, all_schools_utils_1.RegisteredSchools)();
        if (schools.length > 0) {
            const all_learners = await this.users.find({ where: { userType: app_service_1.UserType.learner } });
            if (all_learners.length > 0) {
                schools.forEach(async (school) => {
                    let learners = all_learners.filter(learner => learner.school_id == school.id);
                    const stats = await cache_utils_1.CacheManager.get(school.id);
                    stats.statistics.inactive_learners = learners.filter(learner => learner.status == 'inactive').length;
                    await cache_utils_1.CacheManager.set(school.id, stats);
                });
            }
        }
    }
    async getNewLearners() {
        const schools = await (0, all_schools_utils_1.RegisteredSchools)();
        if (schools.length > 0) {
            const all_learners = await this.users.find({ where: { userType: app_service_1.UserType.learner } });
            if (all_learners.length > 0) {
                schools.forEach(async (school) => {
                    let learners = all_learners.filter(learner => learner.school_id == school.id);
                    const stats = await cache_utils_1.CacheManager.get(school.id);
                    stats.statistics.new_learners = learners.filter(learner => learner.status == 'new').length;
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
], LearnersService.prototype, "getAllLearners", null);
LearnersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LearnersService);
exports.LearnersService = LearnersService;
//# sourceMappingURL=learners.service.js.map