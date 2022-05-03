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
exports.Courses = void 0;
const typeorm_1 = require("typeorm");
const academic_level_entity_1 = require("./academic-level.entity");
const base_entity_1 = require("./base.entity");
const classroom_entity_1 = require("./classroom.entity");
let Courses = class Courses extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Courses.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Courses.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Courses.prototype, "credit_value", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Courses.prototype, "short_form", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Courses.prototype, "pass_mark", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Courses.prototype, "course_codes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Courses.prototype, "learners", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Courses.prototype, "assignments", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Courses.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Courses.prototype, "instructors", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Courses.prototype, "other_properties", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => classroom_entity_1.Classrooms, classroom => classroom.courses),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Courses.prototype, "classroom", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => academic_level_entity_1.AcademicLevels, academic_level => academic_level.courses, { cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Courses.prototype, "academic_level", void 0);
Courses = __decorate([
    (0, typeorm_1.Entity)()
], Courses);
exports.Courses = Courses;
//# sourceMappingURL=course.entity.js.map