import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './stylus.styl';
import PropTypes from 'prop-types';

const Button = props => {
  let className = props.inactive ? 'button-inactive' : 'button';
  return (
    <div styleName={className} onClick={props.onClickHandler}>{props.children}</div>
  )
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default CSSModules(Button, styles)