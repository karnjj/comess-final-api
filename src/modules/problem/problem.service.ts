import { Inject, Injectable } from '@nestjs/common';
import { PROBLEM_REPOSITORY } from 'src/core/constants';
import { Problem } from 'src/entities/problem.entity';

@Injectable()
export class ProblemService {
  constructor(
    @Inject(PROBLEM_REPOSITORY) private problemRepository: typeof Problem,
  ) {}

  findOneById(id: number) {
    return this.problemRepository.findOne({ where: { id } });
  }
  getChoice(id: number) {
    return this.problemRepository.findOne({
      where: { id },
      attributes: { exclude: ['answer'] },
    });
  }
  async checkAnswer(id: number, ans: String) {
    const problem = await this.findOneById(id);
    if (problem.answer === ans) {
      return true;
    } else return false;
  }
}
