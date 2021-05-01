import { Room } from 'src/entities/room.entity';
import { ROOM_REPOSITORY } from '../../core/constants';

export const roomProvider = [
  {
    provide: ROOM_REPOSITORY,
    useValue: Room,
  },
];
