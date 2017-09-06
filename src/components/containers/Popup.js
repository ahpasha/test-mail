import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as pageActions from '../../actions/popupActions';
import PopUp from '../presentational/PopUp';

class PopupContainer extends Component {
  render() {
    return (
      <PopUp {...this.props}/>
    )
  }
}

function MapStateToProps(state) {
  return {
    phoneNumber: state.popup.data.phoneNumber,
    paySum: state.popup.data.paySum,
    isOpened: state.popup.data.isOpened,
    isValid: state.popup.data.isValid,
  }
}


function MapDispatchToProps(dispatch) {
  return {
    popUpActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(PopupContainer)
