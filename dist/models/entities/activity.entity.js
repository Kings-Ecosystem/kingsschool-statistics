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
exports.Activities = void 0;
const typeorm_1 = require("typeorm");
const academic_level_entity_1 = require("./academic-level.entity");
const base_entity_1 = require("./base.entity");
let Activities = class Activities extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activities.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Activities.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activities.prototype, "objective", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activities.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => academic_level_entity_1.AcademicLevels, academic_level => academic_level.activities),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Activities.prototype, "academic_level", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Activities.prototype, "endDate", void 0);
Activities = __decorate([
    (0, typeorm_1.Entity)()
], Activities);
exports.Activities = Activities;
//# sourceMappingURL=activity.entity.js.map