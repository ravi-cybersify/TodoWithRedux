import { ActionTypes } from "../Contents/ActionType";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

interface Action {
  type: string;
  payload: Todo[]; // Updated to handle an array of todos
}

export const todoReducers = (state = initialState, action: Action): TodoState => {
  switch (action.type) {
    case ActionTypes.ADD_TODOS:
      return { todos: [...state.todos, ...action.payload] }; // Spread the array of todos
    default:
      return state;
  }
};
