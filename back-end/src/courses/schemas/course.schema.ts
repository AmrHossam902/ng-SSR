
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course {

  @Prop()
  title: string;

  @Prop()
  desc: string;

  @Prop()
  imageUrl: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

export const CourseSchema = SchemaFactory.createForClass(Course);