import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.styl';

const AddOverlay = (Component) => {
  return CSSModules(class ComposedComponent extends Component {
    constructor(props) {
      super(props);

      this.onClickHandler = this.onClickHandler.bind(this);
      this.getScreenSize = this.getScreenSize.bind(this);
    }
    getScreenSize() {
      this.screenSize = { width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
      this.forceUpdate()
    }
    componentDidMount() {
      this.getScreenSize();
      window.addEventListener('resize', this.getScreenSize)
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.getScreenSize)
    }
    onClickHandler() {
      this.props.popUpActions.closePopup();
    }
    render() {
      return (
        <div>
          {this.props.isOpened && (
            <div styleName='overlay' style={{ width: this.screenSize.width + 'px', height: this.screenSize.height + 'px'}} onClick={this.onClickHandler} >
              <div onClick={event => {event.stopPropagation()}}>
                <Component {...this.props}/>
              </div>
            </div>
          )}
        </div>
      )
    }
  }, styles)
};
export default AddOverlay;