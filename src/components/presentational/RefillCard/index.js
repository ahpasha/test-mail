import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import PropTypes from 'prop-types';
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
    this.props.onEdit({phoneNumber: this.props.num,
      paySum: this.props.sum
    })
  }
  render() {
    return (
      <div styleName='refill-card'>
        <div styleName='refill-card__item'>
          <Button onClickHandler={this.removeCard}>Удалить</Button>
          <Button onClickHandler={this.editCard}>редактировать</Button>
        </div>
        <div styleName='refill-card__item'>{this.props.num}</div>
        <div styleName='refill-card__item'>{this.props.sum}</div>
      </div>
    )
  }
}

RefillCard.propTypes = {
  number: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
  editHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
};

export default CSSModules(RefillCard, styles);