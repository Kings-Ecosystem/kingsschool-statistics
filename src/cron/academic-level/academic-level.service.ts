import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { AcademicLevels } from 'src/models/entities/academic-level.entity';
import { RedisService } from 'src/redis/redis.service';
import { RegisteredSchools } from 'src/utils/all-schools.utils';
import { CacheManager } from 'src/utils/cache.utils';
import { Repository } from 'typeorm';

@Injectable()
export class AcademicLevelService {

    constructor(
        @InjectRepository(AcademicLevels)
        private academicLevels: Repository<AcademicLevels>
    ) { }

    @Cron(CronExpression.EVERY_5_SECONDS)
    async getAllAcademicLevels() {
        const schools = await RegisteredSchools();
        if (schools.length > 0) {
            const all_academicLevels = await this.academicLevels.find();
            if (all_academicLevels.length > 0) {
                schools.forEach(async (school) => {
                    // get target school academicLevels
                    let academicLevels = all_academicLevels.filter(classroom => classroom.school_id == school.id);
                    // set to cache
                    const stats = await CacheManager.get(school.id);
                    stats.statistics.academicLevels = academicLevels.length;
                    await CacheManager.set(school.id, stats);
                });
            }
        }
    }
}
