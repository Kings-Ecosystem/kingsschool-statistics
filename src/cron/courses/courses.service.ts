import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from 'src/models/entities/course.entity';
import { RedisService } from 'src/redis/redis.service';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Courses)
        private courses: Repository<Courses>
    ) { }


    //@Cron(CronExpression.EVERY_10_SECONDS)
    async computeTotalCourses() {
        const total_courses = await this.courses.find();
        const statistics = this.cache().get("statistics");
        statistics.total_courses = total_courses;
        this.cache().set("statistics", statistics);
        Logger.debug("Getting All Courses")
    }

    //@Cron(CronExpression.EVERY_10_SECONDS)
    async computeAllCourses() {
        const courses = (await this.courses.find()).length;
        const statistics = this.cache().get("statistics");
        statistics.courses = courses;
        this.cache().set("statistics", statistics);
        Logger.debug("Getting All Courses")
    }

    cache() {
        return RedisService.client;
    }
}
