import { Module } from '@nestjs/common';
import { RoomModule } from '../room/room.module';
import { UserModule } from '../user/user.module';
import { ProblemController } from './problem.controller';
import { problemProvider } from './problem.provider';
import { ProblemService } from './problem.service';

@Module({
  imports: [UserModule, RoomModule],
  controllers: [ProblemController],
  providers: [ProblemService, ...problemProvider],
})
export class ProblemModule {}
