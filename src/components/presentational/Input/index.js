import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import { onlyNumbers } from '../../../services/validation-input';

class Input extends Component {
  constructor() {
    super();

    this.notAllowChars = this.notAllowChars.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }
  notAllowChars(event) {
    if (!onlyNumbers(event) || this.inputDOM.value.length === this.props.maxLength) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.props.additionalKeyPress && this.props.additionalKeyPress(event, this.props.id)
  }
  focusOnElement() {
    this.inputDOM.focus();
  }
  onKeyUp(event) {
    this.props.additionalKeyUp && this.props.additionalKeyUp(event, this.props.id)
  }
  onKeyDown(event) {
    this.props.additionalKeyDown && this.props.additionalKeyDown(event)
  }
  render() {
    return (
      <input ref={(input => this.inputDOM = input)} onKeyPress={this.notAllowChars} onKeyUp={this.onKeyUp} defaultValue={this.props.defaultValue} onKeyDown={this.onKeyDown} placeholder={this.props.placeholder}/>
    )
  }
}

export default Input;