import React, { Component } from 'react';
import CSSMobules from 'react-css-modules';
import styles from './styles.styl';
import PhoneNumber from '../PhoneNumber'
import Input from '../Input'
import { rubDeclension } from '../../../services/validation-input'
import Button from '../Button';

class PopUp extends Component {
  constructor() {
    super();

    this.state = {
      name: rubDeclension(0)
    };

    this.setMaxValue = this.setMaxValue.bind(this);
    this.changeDeclension = this.changeDeclension.bind(this);
  }
  setMaxValue(event) {
    if (event.target.value.length === 4 ) {
      event.target.value = 5000;
      rubDeclension(5000);
    }
  }
  changeDeclension(event) {
    this.setState({
      name: rubDeclension(+ event.target.value)
    });
  }

  render() {
    return (
      <div>
        <PhoneNumber phoneNumber={this.props.phoneNumber}/>
        <Input maxLength={4} additionalKeyPress={this.setMaxValue} additionalKeyUp={this.changeDeclension} placeholder={0} defaultValue={this.props.paySum}/>
        <div>{this.state.name}</div>
        <Button>продолжить</Button>
      </div>
    )
  }
}

export default PopUp