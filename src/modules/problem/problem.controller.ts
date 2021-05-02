import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/core/decorators/user.decorator';
import { RoomService } from '../room/room.service';
import { UserService } from '../user/user.service';
import { ProblemService } from './problem.service';

@Controller('problem')
export class ProblemController {
  constructor(
    private problemService: ProblemService,
    private userService: UserService,
    private roomService: RoomService,
  ) {}

  @Post('/:problemId')
  async post(
    @User() user: string,
    @Param('problemId') id: number,
    @Body() body: any,
  ) {
    const { ans, roomId } = body;
    if (await this.problemService.checkAnswer(id, ans)) {
      const room = await this.roomService.findOneById(roomId);
      this.userService.getGetScore(user, room);
      return true;
    }
    return false;
  }

  @Get('/:problemId/ans')
  get(@Param('problemId') id: number) {
    return this.problemService.findOneById(id);
  }

  @Get('/:problemId')
  getChoice(@Param('problemId') id: number) {
    return this.problemService.getChoice(id);
  }
}
