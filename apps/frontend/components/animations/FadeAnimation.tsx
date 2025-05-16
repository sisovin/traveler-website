import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './FadeAnimation.css';

const FadeAnimation = ({ in: inProp, children }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default FadeAnimation;
