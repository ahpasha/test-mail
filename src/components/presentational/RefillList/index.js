import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import RefillCard from '../RefillCard'
import PropTypes from 'prop-types';
import Button from '../Button';

const RefillList = (props) => (
<div>
  <ul styleName='refill-list'>
    {props.refills.map(childData => (
      <li styleName='refill-list__item' key={childData.id}>
        <RefillCard {...childData} onRemove={props.transactionsActions.removeTransaction} onEdit={props.popupActions.openPopup}/>
      </li>
    ))}
  </ul>
  <Button onClickHandler={props.popupActions.openPopup}>добавить</Button>
</div>
);

RefillCard.propTypes = {
  refills: PropTypes.array
};

export default CSSModules(RefillList, styles);