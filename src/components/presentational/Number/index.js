import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';
import Input from '../Input'

class PhoneNumber extends Component {
  constructor(props) {
    super(props);
  }
  additionalkeyPress(id, count) {

  }
  render() {
    return (
      <div styleName="telephone">
        <div styleName="telephone__code">
          +7
        </div>
        <div styleName='telephone__divider'>|</div>
        <div>
          <Input additionalkeyPress={this.onKeyPressValue} placeholder={123}/>
        </div>
        <div styleName='telephone__divider'>|</div>
        <div onKeyPress={this.onKeyPressValue}>
          <Input additionalkeyPress={this.onKeyPressValue} placeholder={123}/>
        </div>
        <div styleName='telephone__divider'>-</div>
        <div onKeyPress={this.onKeyPressValue}>
          <Input additionalkeyPress={this.onKeyPressValue} placeholder={11}/>
        </div>
        <div styleName='telephone__divider'>-</div>
        <div onKeyPress={this.onKeyPressValue}>
          <Input additionalkeyPress={this.onKeyPressValue} placeholder={11}/>
        </div>
      </div>
    )
  }
}

export default CSSModules(PhoneNumber, styles);