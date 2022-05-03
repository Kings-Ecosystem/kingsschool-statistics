import { Users } from 'src/models/entities/user.entity';
import { IUser } from 'src/models/interfaces/user.interface';
import { Repository } from 'typeorm';
export declare class TeachersService {
    private users;
    constructor(users: Repository<Users>);
    getAllTeachers(): Promise<void>;
    loggedInTeachers(payload: IUser): Promise<void>;
    resetLoggedInTeachers(): Promise<void>;
}
