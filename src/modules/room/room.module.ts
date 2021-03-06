import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { roomProvider } from './room.provider';
import { UserModule } from '../user/user.module';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [UserModule, EventsModule],
  providers: [RoomService, ...roomProvider],
  controllers: [RoomController],
  exports: [RoomService],
})
export class RoomModule {}
