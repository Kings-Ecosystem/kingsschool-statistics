import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { AcademicLevels } from 'src/models/entities/academic-level.entity';
import { RedisService } from 'src/redis/redis.service';
import { Repository } from 'typeorm';

@Injectable()
export class AcademicLevelService {

    constructor(
        @InjectRepository(AcademicLevels)
        private academicLevels: Repository<AcademicLevels>
    ) { }


    // //@Cron(CronExpression.EVERY_10_SECONDS)
    async computeTotalAcademicLevels() {
        const all_AcademicLevels = await this.academicLevels.find();
        const statistics = this.cache().get("statistics");
        statistics.all_AcademicLevels = all_AcademicLevels;
        this.cache().set("statistics", statistics);
        Logger.debug("Getting All AcademicLevels")
    }

    // //@Cron(CronExpression.EVERY_10_SECONDS)
    async computeAllAcademicLevels() {
        const AcademicLevels = (await this.academicLevels.find()).length;
        const statistics = this.cache().get("statistics");
        statistics.AcademicLevels = AcademicLevels;
        this.cache().set("statistics", statistics);
        Logger.debug("Getting All AcademicLevels")
    }

    cache() {
        return RedisService.client;
    }
}
