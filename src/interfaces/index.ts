export interface IOption {
  id: number;
  title: string;
}

export interface IQuestion {
  id: number;
  text: string;
  winPrice: number;
  options: IOption[];
  answers: IOption[];
}

export interface IConfig {
  questions: IQuestion[];
}
