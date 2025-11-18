import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CrudModule } from './crud/crud.module';

@Module({
  imports: [UsersModule, CrudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
