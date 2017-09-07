import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import Input from '../Input'

const options = [{
  placeholder: 123,
  maxLength: 3
}, {
  placeholder: 123,
  maxLength: 3
}, {
  placeholder: 12,
  maxLength: 2
}, {
  placeholder: 12,
  maxLength: 2
}];

class PhoneNumber extends Component {
  constructor(props) {
    super(props);
    this.inputs = [];

    this.additionalKeyUp = this.additionalKeyUp.bind(this);
    this.additionalKeyDown = this.additionalKeyDown.bind(this);
    this.pasteHandler = this.pasteHandler.bind(this);
    this.numberArr = this.props.phoneNumber ? this.generateNumber(this.props.phoneNumber) : [];
  }
  additionalKeyUp(event, id) {
    let inputValue = event.target.value;
    let key = event.keyCode || event.which;
    if ((inputValue.length >= options[id].maxLength) && (id < options.length - 1) && (key !== 8)) {
      this.inputs[++id].focusOnElement();
      this.inputs[id].selectionStart = this.inputs[id].inputDOM.setSelectionRange(this.inputs[id].inputDOM.value.length, this.inputs[id].inputDOM.value.length);
    } else if ((inputValue.length === 0) && (id !== 0) && (key === 8)) {
      this.inputs[--id].focusOnElement();
      this.inputs[id].selectionStart = this.inputs[id].inputDOM.setSelectionRange(this.inputs[id].inputDOM.value.length, this.inputs[id].inputDOM.value.length);
    }
    this.props.onChange && this.props.onChange()
  }
  additionalKeyDown(event) {
    let key = event.keyCode || event.which;
    if (key === 9) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  generateNumber(number) {
    let str = number.toString();
    let arr = [];
    arr.push(str.substr(0, 3));
    arr.push(str.substr(3, 3));
    arr.push(str.substr(6, 2));
    arr.push(str.substr(8, 2));
    return arr
  }
  getNumber() {
    let number = '';
    this.inputs.forEach((item) => {
      number = number + item.inputDOM.value
    });

    return number
  }
  pasteHandler(event) {
    let clipboardData;
    let pastedData;

    event.stopPropagation();
    event.preventDefault();

    clipboardData = event.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');

    if (pastedData.length === 10 && !isNaN(Number(pastedData)))  {
      this.numberArr = this.generateNumber(pastedData);
      this.forceUpdate()
    }
  }
  render() {
    return (
      <div styleName="telephone">
        <div styleName="telephone__code">
          +7
        </div>
        <div styleName='telephone__divider'>|</div>
        <div styleName='telephone__input'>
          <Input id={0} ref={(input) => this.inputs[0] = input} additionalKeyUp={this.additionalKeyUp} {...options[0]} defaultValue={this.numberArr[0]} additionalPaste={this.pasteHandler}/>
        </div>
        <div styleName='telephone__divider'>|</div>
        <div styleName='telephone__input'>
          <Input id={1} ref={(input) => this.inputs[1] = input} additionalKeyUp={this.additionalKeyUp} {...options[1]} defaultValue={this.numberArr[1]} additionalPaste={this.pasteHandler}/>
        </div>
        <div styleName='telephone__divider'>-</div>
        <div styleName='telephone__input-short'>
          <Input id={2} ref={(input) => this.inputs[2] = input} additionalKeyUp={this.additionalKeyUp} {...options[2]} defaultValue={this.numberArr[2]} additionalPaste={this.pasteHandler}/>
        </div>
        <div styleName='telephone__divider'>-</div>
        <div styleName='telephone__input-short'>
          <Input id={3} ref={(input) => this.inputs[3] = input}  additionalKeyUp={this.additionalKeyUp} additionalKeyDown={this.additionalKeyDown} {...options[3]} defaultValue={this.numberArr[3]} additionalPaste={this.pasteHandler}/>
        </div>
      </div>
    )
  }
}

export default CSSModules(PhoneNumber, styles);