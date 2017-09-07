const initialState = {
  refills: [{id:1, num: 3333333322, sum: 20}, {id:2, num: 3333334422, sum: 20}, {id:3, num: 3333335522, sum: 20}]
}

export default function historyList(state = initialState, action) {
  let newList;
  switch (action.type) {
    case 'ADD_TRANSACTION':
      newList = state.refills.push(action.payload);
      return { ...state, ...{refills: newList}
      };

    case 'REMOVE_TRANSACTION' :
      newList = state.refills.filter(item => item.id !== action.payload);
      return { ...state, ...{refills: newList}
      };

    case 'EDIT_TRANSACTION' :
      newList = state.refills.map(item => {
        if (item.id == action.payload.id) {
          item = action.payload
        }
        return item
      });
      return { ...state, ...{refills: newList}
      };

    default:
      return state;
  }
}