import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Assignments } from 'src/models/entities/assignment.entity';
import { RedisService } from 'src/redis/redis.service';
import { Repository } from 'typeorm';

@Injectable()
export class AssignmentService {

    constructor(
        @InjectRepository(Assignments)
        private Assignments: Repository<Assignments>
    ) { }


    // //@Cron(CronExpression.EVERY_10_SECONDS)
    async computeTotalAssignments() {
        const all_Assignments = await this.Assignments.find();



        const statistics = this.cache().get("statistics");
        statistics.all_Assignments = all_Assignments;
        this.cache().set("statistics", statistics);
        Logger.debug("Getting All Assignments ")
    }

    // //@Cron(CronExpression.EVERY_10_SECONDS)
    async computeAllAssignments() {
        const Assignments = (await this.Assignments.find()).length;
        const statistics = this.cache().get("statistics");
        statistics.Assignments = Assignments;
        this.cache().set("statistics", statistics);
        Logger.debug("Getting All Assignments")
    }

    cache() {
        return RedisService.client;
    }
}
