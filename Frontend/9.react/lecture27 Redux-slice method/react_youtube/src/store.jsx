import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const intialstate = {
  task: [],
};

const taskReducer = (state = intialstate, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state, 
        task: [...state.task, action.playload],
      };

    case DELETE_TASK:
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.playload;
      });
      return {
        ...state,
        task: updatedTask,
      };

    default:
      return state;
  }
};


const store = createStore(taskReducer)
console.log(store);

console.log("initialstate", store.getState());
