import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Classrooms } from 'src/models/entities/classroom.entity';
import { RegisteredSchools } from 'src/utils/all-schools.utils';
import { CacheManager } from 'src/utils/cache.utils';
import { Repository } from 'typeorm';

@Injectable()
export class ClassroomService {

    constructor(
        @InjectRepository(Classrooms)
        private classrooms: Repository<Classrooms>
    ) { }

    @Cron(CronExpression.EVERY_5_SECONDS)
    async getAllClasses() {
        const schools = await RegisteredSchools();
        if (schools.length > 0) {
            const all_classes = await this.classrooms.find();
            if (all_classes.length > 0) {
                schools.forEach(async (school) => {
                    // get target school classes
                    let classes = all_classes.filter(classroom => classroom.school_id == school.id);
                    // set to cache
                    const stats = await CacheManager.get(school.id);
                    stats.statistics.classes = classes.length;
                    await CacheManager.set(school.id, stats);
                });
            }
        }
    }
}

