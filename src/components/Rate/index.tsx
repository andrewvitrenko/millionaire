import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { IRateProps } from './types';

import './styles/index.scss';
import { RateItem } from '../RateItem';

export const Rate: FC<IRateProps> = ({ isOpen }) => {
  const { questions, currentQuestion } = useAppSelector(state => state.game);
  const winSlots = questions
    .map(item => ({
      price: item.winPrice,
      completed: item.completed,
      id: item.id,
    }))
    .reverse();

  return (
    <div className={`rate-container ${isOpen ? 'opened' : ''}`}>
      {winSlots.map(item => (
        <RateItem
          active={item.id === currentQuestion.id}
          completed={item.completed}
          price={item.price}
          key={item.id}
        />
      ))}
    </div>
  );
};
