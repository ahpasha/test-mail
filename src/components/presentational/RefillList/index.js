import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import RefillCard from '../RefillCard'
import PropTypes from 'prop-types';

const RefillList = (props) => (
  <ul styleName='refill-list'>
    {props.refills.map(childData => (
      <li styleName='refill-list__item'>
        <RefillCard {...childData} onRemove={props.transactionsActions.removeTransaction}/>
      </li>
    ))}
  </ul>
);

RefillCard.propTypes = {
  refills: PropTypes.array.isRequired,
};

export default CSSModules(RefillList, styles);