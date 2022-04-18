import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/app.service';
import { Courses } from 'src/models/entities/course.entity';
import { RedisService } from 'src/redis/redis.service';
import { RegisteredSchools } from 'src/utils/all-schools.utils';
import { CacheManager } from 'src/utils/cache.utils';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Courses)
        private courses: Repository<Courses>
    ) { }

    @Cron(CronExpression.EVERY_5_SECONDS)
    async getAllcourses() {
        const schools = await RegisteredSchools();
        if (schools.length > 0) {
            const all_courses = await this.courses.find();
            if (all_courses.length > 0) {
                schools.forEach(async (school) => {
                    // get target school courses
                    let courses = all_courses.filter(course => course.school_id == school.id);
                    // set to cache
                    const stats = await CacheManager.get(school.id);
                    stats.statistics.courses = courses.length;
                    await CacheManager.set(school.id, stats);
                });
            }
        }
    }
}
