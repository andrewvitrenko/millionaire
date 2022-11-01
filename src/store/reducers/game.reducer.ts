import { createSlice } from '@reduxjs/toolkit';
import { IGameStore } from '../../interfaces';

import Config from '../../config/config.json';

const initialState: IGameStore = {
  win: 0,
  currentQuestion: { ...Config.questions[0], completed: false },
  questions: Config.questions.map(item => ({ ...item, completed: false })),
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    nexQuestion: state => {
      state.win = state.currentQuestion.winPrice;
      const index = state.questions.findIndex(
        item => item.id === state.currentQuestion.id,
      );
      state.questions[index].completed = true;
      const nextIndex = index === state.questions.length - 1 ? index : index + 1;
      state.currentQuestion = state.questions[nextIndex];
    },
    resetGame: () => initialState,
  },
});

export const { nexQuestion, resetGame } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
