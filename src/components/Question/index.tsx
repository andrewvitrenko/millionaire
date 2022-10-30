import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { nexQuestion } from '../../store/reducers';
import { IOption } from '../../interfaces';
import { Option } from '../Option';
import { getOptionLetter } from './helpers';

import './styles/index.scss';

export const Question: FC = () => {
  const { currentQuestion } = useAppSelector(state => state.game);
  const dispatch = useDispatch();

  const [selected, setSelected] = useState<IOption | null>(null);

  const handleNextQuestion = () => {
    dispatch(nexQuestion());
  };

  return (
    <div className="question-wrapper">
      <div className="question-container">
        <h2 className="question-title">{currentQuestion.text}</h2>
        <div className="question-options-container">
          {currentQuestion.options.map((option, idx) => (
            <Option
              key={option.id}
              correct={false}
              letter={getOptionLetter(idx)}
              onPress={setSelected}
              option={option}
              selected={selected?.id === option.id}
              validated={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
