import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UserModule } from './modules/user/user.module';
import { RoomModule } from './modules/room/room.module';
import { EventsModule } from './events/events.module';
import { ProblemModule } from './modules/problem/problem.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    RoomModule,
    EventsModule,
    ProblemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
