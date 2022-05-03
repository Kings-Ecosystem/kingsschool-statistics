import { Response } from 'express';
import { TeachersService } from 'src/cron/teachers/teachers.service';
import { IUser } from 'src/models/interfaces/user.interface';
export declare class StatisticsController {
    private teacher;
    constructor(teacher: TeachersService);
    instructorLoggedin(payload: IUser, res: Response): Promise<void>;
}
