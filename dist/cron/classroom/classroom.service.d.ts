import { Classrooms } from 'src/models/entities/classroom.entity';
import { Repository } from 'typeorm';
export declare class ClassroomService {
    private classrooms;
    constructor(classrooms: Repository<Classrooms>);
    getAllClasses(): Promise<void>;
}
