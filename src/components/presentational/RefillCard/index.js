import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import PropTypes from 'prop-types';
import Button from '../Button'

console.log(styles);
const RefillCard = props => (
  <div styleName='refill-card'>
    <div styleName='refill-card__item'>
      <Button onClickHandler="">Удалить</Button>
      <Button onClickHandler="">редактировать</Button>
    </div>
    <div styleName='refill-card__item'>{props.number}</div>
    <div styleName='refill-card__item'>{props.sum}</div>
  </div>
);

RefillCard.propTypes = {
  number: PropTypes.number.isRequired,
  sum: PropTypes.number.isRequired,
  editHandler: PropTypes.func.isRequired,
  removeHandler: PropTypes.func.isRequired
};

export default CSSModules(RefillCard, styles);