import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as popupActions from '../../actions/popupActions';
import * as listActions from '../../actions/TransectionsActions';
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
