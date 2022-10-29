import React, { FC } from 'react';
import { IMenuButtonProps } from './types';

import './styles/index.scss';

export const MenuButton: FC<IMenuButtonProps> = ({ isOpened, onClick }) => {
  return (
    <div className={`menu-button-container`}>
      <button
        className={`menu-button ${isOpened ? 'opened' : ''}`}
        type="button"
        onClick={onClick}
      >
        <span />
      </button>
    </div>
  );
};
