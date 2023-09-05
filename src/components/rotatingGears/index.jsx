import React from 'react';
import Styles from './rotatingGears.module.scss';

const RotatingGears = () => {
  return (
    <div className={Styles['rotating-gears']}>
      <div id="wrapper">
        <div className={Styles.gears} id={Styles['one-gear']}>
          <div className={Styles['gears-container']}>
            <div className={Styles['gear-rotate']}></div>
          </div>
        </div>
        <div className={Styles.gears} id={Styles['two-gears']}>
          <div className={Styles['gears-container']}>
            <div className={Styles['gear-rotate']}></div>
            <div className={Styles['gear-rotate-left']}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingGears;
