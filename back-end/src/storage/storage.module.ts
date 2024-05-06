import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { StorageService } from './storage.service';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname , '../../','static-files'),
            serveRoot: '/static'
          }),
    ],
    providers: [StorageService],
    exports: [StorageService]
})
export class StorageModule {}
