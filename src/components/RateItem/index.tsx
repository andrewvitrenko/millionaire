import React, { FC } from 'react';
import { IRateItemProps } from './types';
import { getClassName } from './helper';

import './styles/index.scss';

import { ReactComponent as Hexagon } from '../../assets/images/svg/hexagon.svg';

export const RateItem: FC<IRateItemProps> = ({ active, completed, price }) => {
  const activityClassName = getClassName(active, completed);

  return (
    <div className={`rate-item-wrapper ${activityClassName}`}>
      <div className="rate-item-container">
        <Hexagon className="rate-item-background" />
        <div className="rate-item-content">
          <span className="rate-item-price">
            $
            {price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};
