import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/app.service';
import { Users } from 'src/models/entities/user.entity';
import { RedisService } from 'src/redis/redis.service';
import { RegisteredSchools } from 'src/utils/all-schools.utils';
import { CacheManager } from 'src/utils/cache.utils';
import { Repository } from 'typeorm';

@Injectable()
export class LearnersService {

    constructor(
        @InjectRepository(Users)
        private users: Repository<Users>
    ) { }


    @Cron(CronExpression.EVERY_10_SECONDS)
    async getAllLearners() {
        const schools = await RegisteredSchools();
        const all_learners = await this.users.find({ where: { userType: UserType.learner } });
        schools.forEach(async (school) => {

            // get target school learners
            let learners = all_learners.filter(learner => learner.school_id == school.id);

            // set to cache
            const stats = await CacheManager.get(school.id);
            stats.statistics.all_learners = learners.length;
            await CacheManager.set(school.id, stats);

        });
    }

    //@Cron(CronExpression.EVERY_10_SECONDS)
    async getActiveLearners() {
        const active_learners = await this.users.find({ where: { userType: UserType.learner, status: "ACTIVE" } });
    }


}
