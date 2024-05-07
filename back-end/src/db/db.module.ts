import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@db-service:${process.env.MONGO_PORT}/uni-db?authSource=admin`)]
})
export class DbModule {}
