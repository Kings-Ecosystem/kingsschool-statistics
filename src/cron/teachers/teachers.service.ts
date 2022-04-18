import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { UserType } from 'src/app.service';
import { Users } from 'src/models/entities/user.entity';
import { IUser } from 'src/models/interfaces/user.interface';
import { RegisteredSchools } from 'src/utils/all-schools.utils';
import { CacheManager } from 'src/utils/cache.utils';
import { Repository } from 'typeorm';

@Injectable()
export class TeachersService {

    constructor(
        @InjectRepository(Users)
        private users: Repository<Users>
    ) { }


    @Cron(CronExpression.EVERY_5_SECONDS)
    async getAllTeachers() {
        const schools = await RegisteredSchools();
        if (schools.length > 0) {
            const all_teachers = await this.users.find({ where: { userType: UserType.staff } });
            if (all_teachers.length > 0) {
                schools.forEach(async (school) => {
                    // get target school teachers
                    let teachers = all_teachers.filter(teacher => teacher.school_id == school.id);
                    // set to cache
                    const stats = await CacheManager.get(school.id);
                    stats.statistics.all_teachers = teachers.length;
                    await CacheManager.set(school.id, stats);
                });
            }
        }
    }

    async loggedInTeachers(payload: IUser) {

        const loggedInTime = new Date(Date.now());
        const schoolStarts = 1;
        const schoolEnds = 18;


        if (loggedInTime.getDay() <= 5) {

            if (loggedInTime.getHours() >= schoolStarts && loggedInTime.getHours() <= schoolEnds) {
                const stats = await CacheManager.get(payload.school_id);
                if (stats) {
                    let logged_in_teachers = stats?.statistics?.logged_in_teachers ? stats.statistics.logged_in_teachers : [];
                    let isInCache = logged_in_teachers.find(teacher => teacher.id == payload.id);
                    if (!isInCache) {
                        logged_in_teachers.push({
                            id: payload.id,
                            username: payload.username,
                            last_login: loggedInTime,
                            profile_photo: payload.profile_photo
                        });
                    }
                    stats.statistics.logged_in_teachers = logged_in_teachers;
                    await CacheManager.set(payload.school_id, stats);
                }
            }
        }
    }

    // @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT) THIS IS THE CRON EXPRESSION FOR THE MIDNIGHT CRON
    @Cron(CronExpression.EVERY_10_MINUTES)
    async resetLoggedInTeachers() {

        const schools = await RegisteredSchools();

        const now = new Date(Date.now());

        // please come back and check this day issue
        if (now.getDay() <= 5) {

            schools.forEach(async (school) => {

                const stats = await CacheManager.get(school.id);

                if (stats) {

                    let loggedInTeachers = stats?.statistics?.logged_in_teachers ? stats.statistics.logged_in_teachers : [];
                    let monthly_teacher_attendance = stats.statistics.monthly_teacher_attendance ? stats.statistics.monthly_teacher_attendance : [];
                    // check if monthly attendance is empty
                    // get all logged in teachers
                    // loggedInTeachers = loggedInTeachers.filter(teacher => teacher.last_login.getMonth() == now.getMonth());
                    loggedInTeachers.forEach(async (teacher) => {
                        // check if teacher is in cache
                        const isInCache = monthly_teacher_attendance.find(attendance => attendance.id == teacher.id);
                        if (!isInCache) {
                            monthly_teacher_attendance.push({
                                id: teacher.id,
                                username: teacher.username,
                                logins: [teacher.last_login],
                                profile_photo: teacher.profile_photo,
                                attendance: 1
                            });
                        } else {
                            const index = monthly_teacher_attendance.findIndex(attendance => attendance.id == teacher.id);
                            monthly_teacher_attendance[index].attendance = monthly_teacher_attendance[index].attendance + 1;
                            monthly_teacher_attendance[index].logins.push(teacher.last_login);
                        }
                        // update cache
                        stats.statistics.monthly_teacher_attendance = monthly_teacher_attendance;
                        await CacheManager.set(school.id, stats);
                    });
                    // reset logged in teachers
                    stats.statistics.logged_in_teachers = [];
                    await CacheManager.set(school.id, stats);
                }
            });
        }
    }

    
}
