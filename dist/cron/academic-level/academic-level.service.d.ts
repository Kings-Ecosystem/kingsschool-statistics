import { AcademicLevels } from 'src/models/entities/academic-level.entity';
import { Repository } from 'typeorm';
export declare class AcademicLevelService {
    private academicLevels;
    constructor(academicLevels: Repository<AcademicLevels>);
    getAllAcademicLevels(): Promise<void>;
}
