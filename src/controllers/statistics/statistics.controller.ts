import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { TeachersService } from 'src/cron/teachers/teachers.service';
import { IUser } from 'src/models/interfaces/user.interface';

@Controller('statistics')
export class StatisticsController {

    constructor(private teacher: TeachersService) { }

    @Post('logged-in')
    async instructorLoggedin(@Body() payload: IUser, @Res() res: Response) {
        const response = await this.teacher.loggedInTeachers(payload);
        res.send(response);
    }
}
