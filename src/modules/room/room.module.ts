import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { roomProvider } from './room.provider';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [RoomService, ...roomProvider],
  controllers: [RoomController],
})
export class RoomModule {}
