import React, { FC } from 'react';
import { IOptionProps } from './types';
import { getOptionClassName } from './helpers';

import './styles/index.scss';

import { ReactComponent as Hexagon } from '../../assets/images/svg/hexagon.svg';

export const Option: FC<IOptionProps> = ({
  option,
  letter,
  correct,
  onPress,
  selected,
  validated,
}) => {
  const className = getOptionClassName(selected, correct, validated);

  const handleOptionClick = () => {
    onPress(option);
  };

  return (
    <div className={`option-wrapper ${className}`} onClick={handleOptionClick}>
      <div className="option-container">
        <Hexagon className="option-background" />
        <div className="option-content">
          <span className="option-letter">{letter}</span>
          <span className="option-title">{option.title}</span>
        </div>
      </div>
    </div>
  );
};
