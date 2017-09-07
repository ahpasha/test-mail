import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './stylus.styl';

const Button = props => {
  let className = props.inactive ? 'button-inactive' : 'button';
  return (
    <div styleName={className} onClick={props.onClickHandler}>{props.children}</div>
  )
};

export default CSSModules(Button, styles)