import { ActionTypes } from "../Contents/ActionType";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  isEditing: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

interface Action {
  type: string;
  payload: any // Updated to handle an array of todos
}

export const todoReducers = (state = initialState, action: Action): TodoState => {
  switch (action.type) {
    case ActionTypes.ADD_TODOS:
      return { todos: [...state.todos, ...action.payload] }; // Spread the array of todos
    case ActionTypes.SINGLE_TODO_EDIT:
      // return { todos: state.todos. };
    case ActionTypes.DELETE_TODO:
      return { 
                todos: state.todos.filter((todo)=> todo.id !== action.payload) 
            }; 
    default:
      return state;
  }
};


