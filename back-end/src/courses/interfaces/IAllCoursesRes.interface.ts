import { ICourse } from "./Icourse.interface";

export interface IAllCoursesRes {
    totalRecords: number;
    currentPage: number;
    records: ICourse[]
}