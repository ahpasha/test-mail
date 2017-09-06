import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as pageActions from '../actions/App2Actions';

console.log(pageActions);
class App2 extends Component {
  onClickCount() {
    let nextCount = this.props.count + 1;
    let { setCount } = this.props.pageActions;
    setCount(nextCount)
  }
  onClickName() {
    let newName = this.props.name.replace(this.props.name[0], String.fromCharCode(parseInt(Math.random() * 100)));
    let { setName } = this.props.pageActions;
    setName(newName)
  }
  render() {
    return (
    <div>
      <div onClick={::this.onClickCount}>count++</div><div>{this.props.count}</div>
      <div>Name: {this.props.name}</div>
      <div onClick={::this.onClickName}>change name</div>
    </div>
    )
  }
}

function MapStateToProps(state) {
  return {
    count: state.app2.count,
    name: state.app2.name
  }
}


function MapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(App2)