export interface ICourse{
    title: string;
    price: number;
    desc: string;
    imageFile?: File;
    imageUrl?: string;
    startDate: Date;
    endDate: Date;
}
