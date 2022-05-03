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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const all_schools_utils_1 = require("../../utils/all-schools.utils");
const cache_utils_1 = require("../../utils/cache.utils");
let SchoolService = class SchoolService {
    async getAllSchools() {
        try {
            const schools = await (0, all_schools_utils_1.RegisteredSchools)();
            if (schools.length > 0) {
                schools.forEach(async (school) => {
                    const isInCache = await cache_utils_1.CacheManager.get(school.id.toString());
                    if (!isInCache) {
                        await cache_utils_1.CacheManager.set(school.id, {
                            statistics: {
                                all_teachers: 0,
                                logged_in_teachers: [],
                                monthly_teacher_attendance: [],
                                teachers: {},
                                all_learners: 0
                            }, preferences: {
                                theme: "light"
                            }, messages: {
                                chats: {
                                    general: []
                                },
                                notifications: []
                            }
                        });
                    }
                });
            }
        }
        catch (error) {
            console.log("Error occured in setting schools: ", error === null || error === void 0 ? void 0 : error.message);
        }
    }
};
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_SECOND),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SchoolService.prototype, "getAllSchools", null);
SchoolService = __decorate([
    (0, common_1.Injectable)()
], SchoolService);
exports.SchoolService = SchoolService;
//# sourceMappingURL=school.service.js.map