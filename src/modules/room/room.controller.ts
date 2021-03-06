import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(
    private roomService: RoomService,
    private userService: UserService,
  ) {}

  @Get(':roomId/start')
  start(@Param('roomId') roomId: number) {
    return this.roomService.start(roomId);
  }

  @Get(':roomId/scoreboard')
  getScoreboard(@Param('roomId') roomId: number) {
    return this.userService.getUserByRoomId(roomId);
  }

  @Get(':roomId')
  getRoom(@Param('roomId') roomId: number) {
    return this.roomService.findOneById(roomId);
  }

  @Post()
  create() {
    return this.roomService.create();
  }

  @Post('/:roomId')
  async joinRoom(@Param('roomId') roomId: number, @Body('name') name: string) {
    const user = await this.userService.create(name);
    return this.userService.addToRoom(user.id, roomId);
  }
}
