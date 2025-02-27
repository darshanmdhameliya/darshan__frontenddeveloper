const redux = require('redux')
const applyMiddleware = redux.applyMiddleware
const reduxlogger = require('redux-logger')
const logger = reduxlogger.createLogger()
// redux store
const createStore = redux.createStore


// redux action 

const buy_item_1 = () => {
  return {
    type: 'BUY_ITEM_1',
    info: 'first redux action'
  }
}

const buy_item_2 = () => {
  return {
    type: 'BUY_ITEM_2',
    info: 'first redux action'
  }
}


// initialState

let initialState = [{
  item1:10,
  item2:20,
}]


// reducer

const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BUY_ITEM_1': return [{...state[0], item1:state[0].item1 -1}]
    case 'BUY_ITEM_2': return [{...state[0], item2:state[0].item2 -1}]
    default: return state
  }
}


// create store


const store = createStore(ItemReducer , applyMiddleware(logger))

console.log('store', store);

console.log('inititalState', store.getState());

store.subscribe(() => console.log('updated state', store.getState()))

store.dispatch(buy_item_1())
store.dispatch(buy_item_1())

store.dispatch(buy_item_2())
store.dispatch(buy_item_2())
store.dispatch(buy_item_2())

