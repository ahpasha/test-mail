import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as transactionsActions from '../../actions/transactionsActions';
import * as popupActions from '../../actions/popupActions';
import RefillList from '../presentational/TransactionsList';

class TransactionsList extends Component {
  render() {
    return (
      <RefillList {...this.props}/>
    )
  }
}

function MapStateToProps(state) {
  return {
    refills: state.transitions.refills,
  }
}


function MapDispatchToProps(dispatch) {
  return {
    transactionsActions: bindActionCreators(transactionsActions, dispatch),
    popupActions: bindActionCreators(popupActions, dispatch)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(TransactionsList)
