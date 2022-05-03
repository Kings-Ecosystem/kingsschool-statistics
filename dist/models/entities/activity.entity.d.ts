import { AcademicLevels } from "./academic-level.entity";
import { Base } from "./base.entity";
export declare class Activities extends Base {
    name: string;
    description: string;
    objective: string;
    startDate: string;
    academic_level: AcademicLevels[];
    endDate: string;
}
