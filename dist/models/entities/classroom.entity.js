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
exports.Classrooms = void 0;
const typeorm_1 = require("typeorm");
const academic_level_entity_1 = require("./academic-level.entity");
const assignment_entity_1 = require("./assignment.entity");
const base_entity_1 = require("./base.entity");
const course_entity_1 = require("./course.entity");
let Classrooms = class Classrooms extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Classrooms.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Classrooms.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Classrooms.prototype, "learners", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => course_entity_1.Courses, courses => courses.classroom),
    __metadata("design:type", course_entity_1.Courses)
], Classrooms.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Classrooms.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => assignment_entity_1.Assignments, assignments => assignments.classroom, { nullable: true }),
    __metadata("design:type", assignment_entity_1.Assignments)
], Classrooms.prototype, "assignments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => academic_level_entity_1.AcademicLevels, academic_level => academic_level.classrooms),
    __metadata("design:type", academic_level_entity_1.AcademicLevels)
], Classrooms.prototype, "academic_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Classrooms.prototype, "activities", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Classrooms.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Classrooms.prototype, "instructors", void 0);
Classrooms = __decorate([
    (0, typeorm_1.Entity)()
], Classrooms);
exports.Classrooms = Classrooms;
//# sourceMappingURL=classroom.entity.js.map