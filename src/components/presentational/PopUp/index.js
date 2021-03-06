import React, { Component } from 'react';
import CSSMobules from 'react-css-modules';
import styles from './styles.styl';
import PhoneNumber from '../PhoneNumber'
import Input from '../Input'
import { rubDeclension, guid, validatePopupInput } from '../../../services/helpers'
import Button from '../Button';

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: rubDeclension(props.paySum)
    };

    this.setMaxValue = this.setMaxValue.bind(this);
    this.changeDeclension = this.changeDeclension.bind(this);
    this.addOrEditTransactions = this.addOrEditTransactions.bind(this);
    this.globalCloseHandler = this.globalCloseHandler.bind(this);
    this.onInputsChange = this.onInputsChange.bind(this);
  }
  globalCloseHandler(event) {
    let key = event.keyCode || event.which;
    if (key === 27) {
      this.props.popUpActions.closePopup();
    }
  }
  componentDidMount() {
    document.addEventListener('keyup', this.globalCloseHandler)
  }
  componentWillUnmount() {
    document.removeEventListener('keyup', this.globalCloseHandler)
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
    this.onInputsChange()
  }
  addOrEditTransactions() {
    if (!this.props.isValid) {
      return
    }
    let num = this.phoneInput.getNumber();
    let sum = this.inputSum.inputDOM.value;
    let id = this.props.id;

    if (id) {
      this.props.listActions.editTransaction({id, num, sum})
    } else {
      id = guid();
      this.props.listActions.addTransaction({id, num, sum})
    }
    this.props.popUpActions.closePopup();
  }
  onInputsChange() {
    let num = this.phoneInput.getNumber();
    let sum = this.inputSum.inputDOM.value;
    this.props.popUpActions.validatePopup(validatePopupInput({num, sum}))
  }
  pasteHandler(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  render() {
    return (
      <div>
        {this.props.isOpened && (
          <div styleName='popup'>
            <div styleName='popup__top-line'>
              <div styleName='popup__phone'>
                <span styleName='popup__item-name'>Номер телефона</span>
                <PhoneNumber ref={(phoneInput) => this.phoneInput = phoneInput}  phoneNumber={this.props.phoneNumber} onChange={this.onInputsChange}/>
              </div>
              <div>
                <span styleName='popup__item-name'>Сумма пополнения</span>
                <div styleName='popup__sum'>
                  <Input styles={styles} ref={inputSum => this.inputSum = inputSum} maxLength={4} additionalKeyPress={this.setMaxValue} additionalKeyUp={this.changeDeclension} placeholder={0} defaultValue={this.props.paySum} additionalPaste={this.pasteHandler}/>
                  <div styleName='popup__sum-declension'>{this.state.name}</div>
                </div>
              </div>
            </div>
              <div styleName='popup__button'>
              <Button onClickHandler={this.addOrEditTransactions} inactive={!this.props.isValid}>Продолжить</Button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CSSMobules(PopUp, styles)