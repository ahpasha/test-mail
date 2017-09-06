import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import { onlyNumbers } from '../../../services/validation-input';

class Input extends Component {
  notAllowChars(event) {
    if (!onlyNumbers(event)) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  focusOnElement() {
    this.inputDOM.focus();
  }
  render() {
    return (
      <input ref={(input => this.inputDOM = input)} onKeyPress={this.notAllowChars} defaultValue={this.props.defaultValue} placeholder={this.props.placeholder}/>
    )
  }
}

export default Input;