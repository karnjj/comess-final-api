import { Inject, Injectable } from '@nestjs/common';
import { ROOM_REPOSITORY } from 'src/core/constants';
import { Room } from 'src/entities/room.entity';
import { getRandomInt, shuffle } from 'src/utils';

@Injectable()
export class RoomService {
  constructor(@Inject(ROOM_REPOSITORY) private roomRepository: typeof Room) {}

  async create() {
    let problems = shuffle([...Array(10).keys()]);
    let id = getRandomInt(1000, 9999);
    while (await this.findOneById(id)) {
      id = getRandomInt(1000, 9999);
    }
    const room = new Room();
    room.id = id;
    room.nProblem = 10;
    room.problems = problems;
    return await room.save();
  }

  findOneById(id: number) {
    return this.roomRepository.findOne({ where: { id } });
  }
}
