import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './stylus.styl';
import PropTypes from 'prop-types';

const Button = props => (
  <div styleName='button' onClick={props.onClickHandler}>{props.children}</div>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired
};

export default CSSModules(Button, styles)