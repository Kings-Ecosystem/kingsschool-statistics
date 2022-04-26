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


}
