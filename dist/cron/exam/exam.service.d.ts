import { Exams } from 'src/models/entities/exam.entity';
import { Repository } from 'typeorm';
export declare class ExamService {
    private exams;
    constructor(exams: Repository<Exams>);
}
