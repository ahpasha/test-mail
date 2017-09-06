import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as transactionsActions from '../../actions/TransectionsActions';
import RefillList from '../presentational/RefillList';

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
    transactionsActions: bindActionCreators(transactionsActions, dispatch)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(TransactionsList)
