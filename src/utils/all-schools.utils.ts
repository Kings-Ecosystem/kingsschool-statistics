import { ISchool } from "src/models/interfaces/school.interface";
import { getRepository } from "typeorm"

export const RegisteredSchools = async () => {
    return await <Promise<ISchool[]>>getRepository("Schools").find();
}