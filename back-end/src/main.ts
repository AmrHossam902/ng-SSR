import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    'origin': 'http://172.30.0.5:4000',
    "methods" : "GET,HEAD,PUT,PATCH,POST,DELETE"
  })
  await app.listen(3000);
}
bootstrap();
