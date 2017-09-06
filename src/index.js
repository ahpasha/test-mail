import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import PopupContainer from './components/containers/Popup'
import TransactionsContainer from './components/containers/TransactionsList'
import configureStore from './store/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <div>
      <TransactionsContainer/>
      <PopupContainer/>
    </div>
  </Provider>,
  document.getElementById('root')
)
