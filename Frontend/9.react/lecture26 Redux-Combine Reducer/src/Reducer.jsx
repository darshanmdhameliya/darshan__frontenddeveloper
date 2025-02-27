const initialState1 = 20
const initialState2 = 50

const Reducer = (state = initialState1  , action) => {
  switch(action.type){
    case 'BUY_ITEM_1': return state - 1
    default: return state
  }
}

export const demoReducer = (state = initialState2  , action) => {
  switch(action.type){
    case 'BUY_ITEM_1': return state - 1
    default: return state
  }
}

export default Reducer
