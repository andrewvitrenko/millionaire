import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { IRateProps } from './types';

import './styles/index.scss';

export const Rate: FC<IRateProps> = ({ isOpen }) => {
  const { questions, currentQuestion } = useAppSelector(state => state.game);
  const winSlots = questions.map(item => ({
    price: item.winPrice,
    completed: item.completed,
  }));

  return <div className={`rate-container ${isOpen ? 'opened' : ''}`}></div>;
};
