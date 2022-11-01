import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { nexQuestion } from '../../store/reducers';
import { IOption } from '../../interfaces';
import { Option } from '../Option';
import { getOptionLetter, getIsCorrect, sleep } from './helpers';
import { ROUTES } from '../../constants';

import './styles/index.scss';

export const Question: FC = () => {
  const { currentQuestion, questions } = useAppSelector(state => state.game);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selected, setSelected] = useState<IOption | null>(null);
  const [validated, setValidated] = useState(false);

  const handleAnswerQuestion = async (option: IOption) => {
    setSelected(option);
    const isCorrect = getIsCorrect(option, currentQuestion.answers);
    const index = questions.findIndex(item => item.id === currentQuestion.id);
    const isLast = index === questions.length - 1;

    await sleep(2000);

    setValidated(true);

    await sleep(1000);

    if (isCorrect) {
      dispatch(nexQuestion());
      if (isLast) {
        navigate(ROUTES.GAME_OVER);
      }
    } else {
      navigate(ROUTES.GAME_OVER);
    }
  };

  useEffect(() => {
    setSelected(null);
    setValidated(false);
  }, [currentQuestion]);

  return (
    <div className="question-wrapper">
      <div className="question-container">
        <h2 className="question-title">{currentQuestion.text}</h2>
        <div className="question-options-container">
          {currentQuestion.options.map((option, idx) => (
            <Option
              key={option.id}
              correct={getIsCorrect(option, currentQuestion.answers)}
              letter={getOptionLetter(idx)}
              onPress={handleAnswerQuestion}
              option={option}
              selected={selected?.id === option.id}
              validated={validated}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
