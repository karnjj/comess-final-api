import { Problem } from 'src/entities/problem.entity';
import { PROBLEM_REPOSITORY } from '../../core/constants';

export const problemProvider = [
  {
    provide: PROBLEM_REPOSITORY,
    useValue: Problem,
  },
];
