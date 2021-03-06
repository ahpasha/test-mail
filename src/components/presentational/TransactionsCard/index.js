import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import Button from '../Button'

class RefillCard extends Component {
  constructor(props) {
    super(props);

    this.removeCard = this.removeCard.bind(this);
    this.editCard = this.editCard.bind(this);
  }
  removeCard() {
    this.props.onRemove(this.props.id)
  }
  editCard() {
    this.props.onEdit({id: this.props.id,
      phoneNumber: this.props.num,
      paySum: this.props.sum
    })
  }
  render() {
    return (
      <div styleName='refill-card'>
        <div styleName='refill-card__controls'>
          <div styleName='refill-card__button'>
            <Button onClickHandler={this.removeCard}>Удалить</Button>
          </div>
          <div styleName='refill-card__button'>
            <Button onClickHandler={this.editCard}>редактировать</Button>
          </div>
        </div>
        <div styleName='refill-card__item'>{this.props.num}</div>
        <div styleName='refill-card__item'>{this.props.sum}</div>
      </div>
    )
  }
}

export default CSSModules(RefillCard, styles);