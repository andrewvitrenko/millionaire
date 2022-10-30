import { IOption } from '../../../interfaces';

export interface IOptionProps {
  option: IOption;
  correct: boolean;
  selected: boolean;
  validated: boolean;
  letter: string;
  onPress: (option: IOption) => void;
}
