import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan = require('morgan');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('combined', {immediate: true}));
  await app.listen(3000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
