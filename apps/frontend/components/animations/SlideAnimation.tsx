import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './SlideAnimation.css';

const SlideAnimation = ({ in: inProp, children }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={300}
      classNames="slide"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default SlideAnimation;
