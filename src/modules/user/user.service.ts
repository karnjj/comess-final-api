import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { User } from 'src/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private userRepository: typeof User) {}

  async create(name: string) {
    const user = new User();
    user.id = uuidv4();
    user.name = name;
    return await user.save();
  }

  async addToRoom(userId: string, roomId: number) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) throw new UnauthorizedException();

    user.roomId = roomId;
    user.score = 0;

    return await user.save();
  }
}