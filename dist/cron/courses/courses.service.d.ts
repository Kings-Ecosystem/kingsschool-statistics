import { Courses } from 'src/models/entities/course.entity';
import { Repository } from 'typeorm';
export declare class CoursesService {
    private courses;
    constructor(courses: Repository<Courses>);
    getAllcourses(): Promise<void>;
}
