import {REMOVE_TRANSACTION, EDIT_TRANSACTION, ADD_TRANSACTION, CLEAR_TRANSACTION} from '../../constants/transactions'
let transactionsHistory = JSON.parse(window.localStorage.getItem('historyTransactions') || '[]');

export default function transactionsList(state = {refills: transactionsHistory}, action) {
  let newList;
  switch (action.type) {
    case ADD_TRANSACTION:
      newList = state.refills.concat(action.payload);
      window.localStorage.setItem('historyTransactions', JSON.stringify(newList));
      return { ...state, ...{refills: newList}
      };

    case REMOVE_TRANSACTION :
      newList = state.refills.filter(item => item.id !== action.payload);
      window.localStorage.setItem('historyTransactions', JSON.stringify(newList));
      return { ...state, ...{refills: newList}
      };

    case EDIT_TRANSACTION :
      newList = state.refills.map(item => {
        if (item.id == action.payload.id) {
          item = action.payload
        }
        return item
      });
      window.localStorage.setItem('historyTransactions', JSON.stringify(newList));
      return { ...state, ...{refills: newList}
      };
    case CLEAR_TRANSACTION :
      window.localStorage.setItem('historyTransactions', JSON.stringify([]));
      return { ...state, ...{refills: []}
      };
    default:
      return state;
  }
}