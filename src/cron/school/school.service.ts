import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Schools } from 'src/models/entities/school.entity';
import { RegisteredSchools } from 'src/utils/all-schools.utils';
import { CacheManager } from 'src/utils/cache.utils';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolService {

    // Get all schools and set to cache
    @Cron(CronExpression.EVERY_SECOND)
    async getAllSchools() {
        try {
            const schools = await RegisteredSchools();
            schools.map(school => school.id).forEach(async (school) => {
                // check if school is in cache
                const isInCache = await CacheManager.get(school);
                if (!isInCache) {
                    await CacheManager.set(school, { statistics: {}, preferences: {}, messages: {} });
                }
            });

        } catch (error) {
            console.log("Error occured in setting schools: ", error?.message);
        }
    }
}
