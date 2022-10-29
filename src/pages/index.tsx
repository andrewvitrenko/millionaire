import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '../constants';
import { Home } from './Home';
import { Game } from './Game';
import { GameOver } from './GameOver';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.GAME} element={<Game />} />
        <Route path={ROUTES.GAME_OVER} element={<GameOver />} />
      </Routes>
    </BrowserRouter>
  );
};
