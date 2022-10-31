import React, { FC } from 'react';
import { IOptionProps } from './types';

import './styles/index.scss';

import { ReactComponent as Hexagon } from '../../assets/images/svg/hexagon.svg';

export const Option: FC<IOptionProps> = ({ option, letter }) => (
  <div className="option-wrapper">
    <div className="option-container">
      <Hexagon className="option-background" />
      <div className="option-content">
        <span className="option-letter">{letter}</span>
        <span className="option-title">{option.title}</span>
      </div>
    </div>
  </div>
);
