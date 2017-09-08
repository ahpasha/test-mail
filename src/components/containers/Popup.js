import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as popupActions from '../../actions/popupActions';
import * as listActions from '../../actions/transactionsActions';
import PopUp from '../presentational/PopUp';
import AddOverlay from '../presentational/AddOverlay';

const PopupWithOverLay = AddOverlay(PopUp);

class PopupContainer extends Component {
  render() {
    return (
      <PopupWithOverLay {...this.props}/>
    )
  }
}

function MapStateToProps(state) {
  return {
    id: state.popup.data.id,
    phoneNumber: state.popup.data.phoneNumber,
    paySum: state.popup.data.paySum,
    isOpened: state.popup.isOpened,
    isValid: state.popup.isValid,
  }
}


function MapDispatchToProps(dispatch) {
  return {
    popUpActions: bindActionCreators(popupActions, dispatch),
    listActions: bindActionCreators(listActions, dispatch)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(PopupContainer)
