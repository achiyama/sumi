import { NestFactory } from '@nestjs/core';
import { ManagerModule } from './manager.module';

async function bootstrap() {
  const app = await NestFactory.create(ManagerModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
