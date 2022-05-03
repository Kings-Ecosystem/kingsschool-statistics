"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisteredSchools = void 0;
const typeorm_1 = require("typeorm");
const RegisteredSchools = async () => {
    return await (0, typeorm_1.getRepository)("Schools").find();
};
exports.RegisteredSchools = RegisteredSchools;
//# sourceMappingURL=all-schools.utils.js.map