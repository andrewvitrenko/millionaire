import { IOption } from '../../../interfaces';

export const getIsCorrect = (option: IOption, answers: IOption[]) => (
  !!answers.find(answer => answer.id === option.id)
);
