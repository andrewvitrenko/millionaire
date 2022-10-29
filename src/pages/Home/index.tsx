import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ROUTES } from '../../constants';

import congratulations from '../../assets/images/congratulations.png';
import './styles/index.scss';

export const Home: FC = () => {
  const navigate = useNavigate();

  const handleStartPress = () => {
    navigate(ROUTES.GAME);
  };

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="home-image-container">
          <img src={congratulations} alt="greeting hand" />
        </div>
        <div className="home-content">
          <h1 className="home-title">Who wants to be a millionaire?</h1>
          <Button text="Start" onClick={handleStartPress} />
        </div>
      </div>
    </div>
  );
};
