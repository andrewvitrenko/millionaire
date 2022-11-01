import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/Button';
import { ROUTES } from '../../constants';
import { resetGame } from '../../store/reducers';
import { useAppSelector } from '../../hooks';

import './styles/index.scss';

import congratulations from '../../assets/images/congratulations.png';

export const GameOver: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { win } = useAppSelector(state => state.game);

  const handleTryAgainPress = () => {
    dispatch(resetGame());
    navigate(ROUTES.GAME);
  };

  return (
    <div className="game-over-wrapper">
      <div className="game-over-container">
        <div className="game-over-image-container">
          <img src={congratulations} alt="greeting hand" />
        </div>
        <div className="game-over-content">
          <div className="game-over-info">
            <p className="game-over-subtitle">Total score:</p>
            <h1 className="game-over-title">
              $
              {win.toLocaleString()}
              {' '}
              earned
            </h1>
          </div>
          <div className="game-over-actions">
            <Button text="Try again" onClick={handleTryAgainPress} />
          </div>
        </div>
      </div>
    </div>
  );
};
