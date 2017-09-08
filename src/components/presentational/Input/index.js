import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import { onlyNumbers } from '../../../services/helpers';

class Input extends Component {
  constructor() {
    super();

    this.notAllowChars = this.notAllowChars.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onPasteHandler = this.onPasteHandler.bind(this);
  }
  notAllowChars(event) {
    if (!onlyNumbers(event.keyCode || event.which) || this.inputDOM.value.length === this.props.maxLength) {
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
  onPasteHandler(event) {
    this.props.additionalPaste && this.props.additionalPaste(event)
  }
  render() {
    return (
      <input styleName='number-input' key={this.props.defaultValue} ref={(input => this.inputDOM = input)} onKeyPress={this.notAllowChars} onKeyUp={this.onKeyUp} defaultValue={this.props.defaultValue} onKeyDown={this.onKeyDown} placeholder={this.props.placeholder} onPaste={this.onPasteHandler}/>
    )
  }
}

export default CSSModules(Input, styles);