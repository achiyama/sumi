import { NestFactory } from '@nestjs/core';
import { SkytreeModule } from './skytree.module';

async function bootstrap() {
  const app = await NestFactory.create(SkytreeModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
