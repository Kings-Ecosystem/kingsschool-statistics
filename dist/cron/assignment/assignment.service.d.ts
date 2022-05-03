import { Assignments } from 'src/models/entities/assignment.entity';
import { Repository } from 'typeorm';
export declare class AssignmentService {
    private Assignments;
    constructor(Assignments: Repository<Assignments>);
}
