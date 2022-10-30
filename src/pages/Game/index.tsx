import React, { FC, useState } from 'react';
import { MenuButton } from '../../components/MenuButton';
import { Question } from '../../components/Question';
import { Rate } from '../../components/Rate';

import './styles/index.scss';

export const Game: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(prev => !prev);
  };

  return (
    <div className="game-container">
      <MenuButton isOpened={openMenu} onClick={toggleMenu} />
      <Question />
      <Rate isOpen={openMenu} />
    </div>
  );
};
