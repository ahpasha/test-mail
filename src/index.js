import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import App2 from './containers/App2'
import configureStore from './store/configureStore'

import List from './components/presentational/RefillList';
import PhoneNumber from './components/presentational/Number'

const store = configureStore()

render(
  <Provider store={store}>
    <div>
      <PhoneNumber/>
      <List refills={[{num:123, sum: 124}, {num:123, sum: 124}, {num:123, sum: 124}]}/>
      <App />
      <App2/>
    </div>
  </Provider>,
  document.getElementById('root')
)
