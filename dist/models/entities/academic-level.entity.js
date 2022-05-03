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
exports.AcademicLevels = void 0;
const typeorm_1 = require("typeorm");
const activity_entity_1 = require("./activity.entity");
const assignment_entity_1 = require("./assignment.entity");
const base_entity_1 = require("./base.entity");
const classroom_entity_1 = require("./classroom.entity");
const course_entity_1 = require("./course.entity");
let AcademicLevels = class AcademicLevels extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AcademicLevels.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AcademicLevels.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AcademicLevels.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AcademicLevels.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AcademicLevels.prototype, "learners", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AcademicLevels.prototype, "objectives", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => course_entity_1.Courses, courses => courses.academic_level),
    __metadata("design:type", Array)
], AcademicLevels.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => assignment_entity_1.Assignments, assignments => assignments.academic_level),
    __metadata("design:type", Array)
], AcademicLevels.prototype, "assignments", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => activity_entity_1.Activities, activities => activities.academic_level),
    __metadata("design:type", Array)
], AcademicLevels.prototype, "activities", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AcademicLevels.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AcademicLevels.prototype, "instructors", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => classroom_entity_1.Classrooms, classrooms => classrooms.academic_level),
    __metadata("design:type", Array)
], AcademicLevels.prototype, "classrooms", void 0);
AcademicLevels = __decorate([
    (0, typeorm_1.Entity)()
], AcademicLevels);
exports.AcademicLevels = AcademicLevels;
//# sourceMappingURL=academic-level.entity.js.map