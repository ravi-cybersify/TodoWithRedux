import { ActionTypes } from "../Contents/ActionType";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
}

const initialState:{todos:Todo[]} = {
    todos : []
}

export const todoReducers = (state = initialState, {type, payload}:any):TodoState =>{
    switch (type) {
        case ActionTypes.ADD_TODOS:
            return {todos: [...state.todos, payload],};
        default:
            return state;
    }
}