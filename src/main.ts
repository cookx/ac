import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './interceptors/transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 绑定拦截器：响应映射
  app.useGlobalInterceptors(new TransformInterceptor());
  // 开启跨域
  app.enableCors();
  const port = 3001;
  await app.listen(port);
  console.log(`server start at: http://localhost:${port}`)
}
bootstrap();
