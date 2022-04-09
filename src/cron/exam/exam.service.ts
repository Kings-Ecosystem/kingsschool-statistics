import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Exams } from 'src/models/entities/exam.entity';
import { RedisService } from 'src/redis/redis.service';
import { Repository } from 'typeorm';

@Injectable()
export class ExamService {

    constructor(
        @InjectRepository(Exams)
        private exams: Repository<Exams>
    ) { }


    //@Cron(CronExpression.EVERY_10_SECONDS)
    async computeTotalExams() {
        const total_exams = await this.exams.find();
        const statistics = this.cache().get("statistics");
        statistics.total_exams = total_exams;
        this.cache().set("statistics", statistics);
        Logger.debug("Getting All Exams")
    }

    //@Cron(CronExpression.EVERY_10_SECONDS)
    async computeAllExams() {
        const exams = (await this.exams.find()).length;
        const statistics = this.cache().get("statistics");
        statistics.exams = exams;
        this.cache().set("statistics", statistics);
        Logger.debug("Getting All Exams")
    }

    cache() {
        return RedisService.client;
    }
}
