import React, { Component } from 'react';
import CSSMobules from 'react-css-modules';
import styles from './styles.styl';
import PhoneNumber from '../PhoneNumber'
import Input from '../Input'
import { rubDeclension } from '../../../services/validation-input'
import Button from '../Button';
import { guid } from '../../../services/validation-input'

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: rubDeclension(props.paySum)
    };

    this.setMaxValue = this.setMaxValue.bind(this);
    this.changeDeclension = this.changeDeclension.bind(this);
    this.addOrEditTransactions = this.addOrEditTransactions.bind(this);
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
  addOrEditTransactions() {
    let num = this.phoneInput.getNumber();
    let sum = this.inputSum.inputDOM.value;
    let id = this.props.id;

    if (id) {
      this.props.listActions.editTransaction({id, num, sum})
    } else {
      id = guid();
      this.props.listActions.addTransaction({id, num, sum})
    }
    //this.props.popUpActions.closePopup();

  }

  render() {
    return (
      <div>
        {this.props.isOpened && (
          <div>
            <PhoneNumber ref={(phoneInput) => this.phoneInput = phoneInput}  phoneNumber={this.props.phoneNumber}/>
            <Input ref={inputSum => this.inputSum = inputSum} maxLength={4} additionalKeyPress={this.setMaxValue} additionalKeyUp={this.changeDeclension} placeholder={0} defaultValue={this.props.paySum}/>
            <div>{this.state.name}</div>
            <Button onClickHandler={this.addOrEditTransactions}>продолжить</Button>
          </div>
        )}
      </div>
    )
  }
}

export default PopUp