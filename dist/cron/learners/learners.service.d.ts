import { Users } from 'src/models/entities/user.entity';
import { Repository } from 'typeorm';
export declare class LearnersService {
    private users;
    constructor(users: Repository<Users>);
    getAllLearners(): Promise<void>;
    getActiveLearners(): Promise<void>;
    getInactiveLearners(): Promise<void>;
    getNewLearners(): Promise<void>;
}
