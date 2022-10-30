export interface IOption {
  id: number;
  title: string;
}

export interface IConfigQuestion {
  id: number;
  text: string;
  winPrice: number;
  options: IOption[];
  answers: IOption[];
}

export interface IQuestion extends IConfigQuestion {
  completed: boolean;
}

export interface IConfig {
  questions: IQuestion[];
}

export interface IGameStore {
  win: number;
  currentQuestion: IQuestion;
  questions: IQuestion[];
}
