const redux = require('redux')

// redux store
const {createStore, combineReducers} = redux



// redux action 

const buy_item = () => {
  return {
    type: 'BUY_ITEM',
  }
}

const buy_book = ()=>{
  return{
    type:'BUY_BOOK',
  }
}

// initialState

let initialState1 = {
  NUMBEROFPHONE: 20,
  NUMBEROFCHAIR: 30
}

let initialState2 = {
  NUMBEROFBOOK: 50,
}


// reducer

const ItemReducer = (state = initialState1, action) => {
  switch (action.type) {
    case 'BUY_ITEM': return {
      ...state,
      NUMBEROFPHONE: state.NUMBEROFPHONE - 1,
      NUMBEROFCHAIR: state.NUMBEROFCHAIR * 5
    }
    default: return state
  }
}
const BookReducer = (state = initialState2, action) => {
  switch (action.type) {
    case 'BUY_BOOK':return{
      ...state,
      NUMBEROFBOOK:state.NUMBEROFBOOK +1 
    }
    default: return state
  }
}

// create store

const RootReducer = combineReducers({ItemReducer,BookReducer})

const store = createStore(RootReducer)

console.log('store', store);

console.log('inititalState', store.getState());

store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch(buy_item())
store.dispatch(buy_book())
store.dispatch(buy_book())
store.dispatch(buy_book())
store.dispatch(buy_book())

