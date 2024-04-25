import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[MongooseModule.forRoot('mongodb://root:root@db-service:27017/uni-db?authSource=admin')]
})
export class DbModule {}
