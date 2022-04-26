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

}
