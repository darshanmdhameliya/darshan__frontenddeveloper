const initialstate = {
  black: "bg-black",
  white: "bg-white",
};

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "BLACK":
      return {...state, black:state.black = "bg-black"};

    case "WHITE":
      return {...state, white:state.white= "bg-white"};

    default:
      return state;
  }
};

export default  Reducer