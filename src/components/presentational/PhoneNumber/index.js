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
  }
  additionalKeyUp(event, id) {
    let inputValue = event.target.value;
    let key = event.keyCode || event.which;
    if ((inputValue.length >= options[id].maxLength) && (id < options.length - 1) && (key !== 8)) {
      this.inputs[++id].focusOnElement();
    } else if ((inputValue.length === 0) && (id !== 0) && (key === 8)) {
      this.inputs[--id].focusOnElement();
    }
  }
  additionalKeyDown(event) {
    let key = event.keyCode || event.which;
    if (key === 9) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  generateNumber(number) {
    let arr = number.toString().split('');
    let editedArr = arr.reduce((previous, num, index) => {
      if (index < 3) {
        previous[0] = previous[0] + num;
      } else if (index < 6) {
        previous[1] = previous[0] + num;
      } else if (index < 8) {
        previous[2] = previous[0] + num;
      } else if (index < 10) {
        previous[3] = previous[0] + num;
      }
      return previous
    }, [ '', '', '', '' ]);
    return editedArr
  }
  render() {
    let numberArr = this.props.phoneNumber ? this.generateNumber(this.props.phoneNumber) : [];
    return (
      <div styleName="telephone">
        <div styleName="telephone__code">
          +7
        </div>
        <div styleName='telephone__divider'>|</div>
        <Input id={0} ref={(input) => this.inputs.push(input)} additionalKeyUp={this.additionalKeyUp} {...options[0]} defaultValue={numberArr[0]}/>
        <div styleName='telephone__divider'>|</div>
        <Input id={1} ref={(input) => this.inputs.push(input)} additionalKeyUp={this.additionalKeyUp} {...options[1]} defaultValue={numberArr[1]}/>
        <div styleName='telephone__divider'>-</div>
        <Input id={2} ref={(input) => this.inputs.push(input)} additionalKeyUp={this.additionalKeyUp} {...options[2]} defaultValue={numberArr[2]}/>
        <div styleName='telephone__divider'>-</div>
        <Input id={3} ref={(input) => this.inputs.push(input)}  additionalKeyUp={this.additionalKeyUp} additionalKeyDown={this.additionalKeyDown} {...options[3]} defaultValue={numberArr[3]}/>
      </div>
    )
  }
}

export default CSSModules(PhoneNumber, styles);