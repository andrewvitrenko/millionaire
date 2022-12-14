import React, { FC } from 'react';
import { IButtonProps } from './types';
import './styles/index.scss';

export const Button: FC<IButtonProps> = ({ text, onClick }) => (
  <button className="button" onClick={onClick} type="button">
    {text}
  </button>
);
