import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import App2 from './containers/App2'
import PopupContainer from './components/containers/Popup'
import TransactionsContainer from './components/containers/TransactionsList'
import configureStore from './store/configureStore'

import List from './components/presentational/RefillList';

const store = configureStore()

render(
  <Provider store={store}>
    <div>
      <TransactionsContainer/>
      <PopupContainer/>
      <App />
      <App2/>
    </div>
  </Provider>,
  document.getElementById('root')
)
