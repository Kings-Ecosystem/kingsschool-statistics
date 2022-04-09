import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/app.service';
import { Users } from 'src/models/entities/user.entity';
import { RegisteredSchools } from 'src/utils/all-schools.utils';
import { CacheManager } from 'src/utils/cache.utils';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersService {

    constructor(
        @InjectRepository(Users)
        private users: Repository<Users>
    ) { }


    @Cron(CronExpression.EVERY_10_SECONDS)
    async getAllTeacher() {

        const schools = await RegisteredSchools();
        const all_teachers = await this.users.find({ where: { userType: UserType.staff } });
        schools.forEach(async (school) => {

            // get target school teachers
            let teachers = all_teachers.filter(teacher => teacher.school_id == school.id);

            // set to cache
            const stats = await CacheManager.get(school.id);
            stats.statistics.all_teachers = teachers.length;
            await CacheManager.set(school.id, stats);

        });

    }

    // @Cron(CronExpression.EVERY_10_SECONDS)
    async getActiveTeachers() {
        const active_teachers = await this.users.find({ where: { userType: UserType.staff, status: "ACTIVE" } });

    }


}
