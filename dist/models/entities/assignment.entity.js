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
exports.Assignments = void 0;
const typeorm_1 = require("typeorm");
const academic_level_entity_1 = require("./academic-level.entity");
const base_entity_1 = require("./base.entity");
const classroom_entity_1 = require("./classroom.entity");
let Assignments = class Assignments extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Assignments.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "learners", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "assignments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "activities", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "exams", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "instructors", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "objective", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => classroom_entity_1.Classrooms, classroom => classroom.assignments),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", classroom_entity_1.Classrooms)
], Assignments.prototype, "classroom", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => academic_level_entity_1.AcademicLevels, academic_level => academic_level.assignments),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Assignments.prototype, "academic_level", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "course", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Assignments.prototype, "attachments", void 0);
Assignments = __decorate([
    (0, typeorm_1.Entity)()
], Assignments);
exports.Assignments = Assignments;
//# sourceMappingURL=assignment.entity.js.map