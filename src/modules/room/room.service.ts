import { Inject, Injectable } from '@nestjs/common';
import { existsSync, mkdirSync } from 'node:fs';
import { ROOM_REPOSITORY, State } from 'src/core/constants';
import { Room } from 'src/entities/room.entity';
import { EventsGateway } from 'src/events/events.gateway';
import { copyFullImg, cropImg, getRandomInt, shuffle } from 'src/utils';
import * as rimraf from 'rimraf';

@Injectable()
export class RoomService {
  constructor(
    @Inject(ROOM_REPOSITORY) private roomRepository: typeof Room,
    private eventsGateway: EventsGateway,
  ) {}

  async create() {
    let problems = shuffle([...Array(10).keys()]);
    let id = getRandomInt(1000, 9999);
    while (await this.findOneById(id)) {
      id = getRandomInt(1000, 9999);
    }
    const room = new Room();
    room.id = id;
    room.nProblem = 0;
    room.state = State.PRE;
    room.problems = problems;
    return await room.save();
  }

  findOneById(id: number) {
    return this.roomRepository.findOne({ where: { id } });
  }

  async start(id: number) {
    var count = 0;
    var nProb = 0;
    const room = await this.findOneById(id);
    room.state = State.START;
    await room.save();
    const start = setInterval(async () => {
      let state: string;
      let timeLeft: number;
      let dir = `tmp/${room.problems[nProb] + 1}`;
      if (count == 0) {
        room.nProblem = nProb;
        await room.save();
        if (!existsSync(dir)) {
          mkdirSync(dir);
        }
      }
      if (count == 5) {
        room.start = Date.now();
        await room.save();
      }
      if (count < 5) {
        state = 'prepare';
        timeLeft = 5 - count;
      } else if (count < 25) {
        state = 'start';
        timeLeft = 25 - count;
        if (timeLeft % 2 == 0) {
          const n = getRandomInt(1, 36);
          await cropImg(n, room.problems[nProb] + 1);
          this.eventsGateway.server
            .to(`${id}`)
            .emit('loadImg', [n, room.problems[nProb] + 1]);
        }
      } else if (count == 25) {
        state = 'result';
        timeLeft = 28 - count;
        copyFullImg(room.problems[nProb] + 1);
        this.eventsGateway.server
          .to(`${id}`)
          .emit('loadAnswer', room.problems[nProb] + 1);
      }
      this.eventsGateway.server
        .to(`${id}`)
        .emit('process', JSON.stringify([state, timeLeft, nProb]));
      count++;
      if (count == 28) {
        rimraf.sync(dir);
        count = 0;
        nProb++;
      }
      if (nProb == room.problems.length) {
        this.eventsGateway.server.to(`${id}`).emit('loadScoreBoard');
        clearInterval(start);
      }
    }, 1000);
    return {};
  }
}
