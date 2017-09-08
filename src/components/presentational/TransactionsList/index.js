import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import RefillCard from '../TransactionsCard'
import Button from '../Button';

class RefillList extends Component {
  constructor(props) {
    super(props);
    this.addNewHandler = this.addNewHandler.bind(this);
    this.onEditHandler = this.onEditHandler.bind(this);
  }
  addNewHandler() {
    this.props.popupActions.openPopup({
      phoneNumber: '',
      paySum: '',
      id: ''
    })
  }
  onEditHandler(data) {
    this.props.popupActions.openPopup(data);
    this.props.popupActions.validatePopup(true)
  }
  render() {
    return (
      <div>
        <ul styleName='refill-list'>
          {this.props.refills.map(childData => (
            <li styleName='refill-list__item' key={childData.id}>
              <RefillCard {...childData} onRemove={this.props.transactionsActions.removeTransaction} onEdit={this.onEditHandler}/>
            </li>
          ))}
        </ul>
        <Button styles={styles} onClickHandler={this.addNewHandler}>Добавить</Button>
        <Button styles={styles} onClickHandler={this.props.transactionsActions.clearTransactions}>Очистить</Button>
      </div>
    )
  }
}

export default CSSModules(RefillList, styles);