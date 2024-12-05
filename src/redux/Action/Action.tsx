import { ActionTypes } from "../Contents/ActionType";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export const setTodos = (todo:Todo[])=>{
    console.log(todo,"fdsfjdslfdsjfldtodo")
    return {
        type : ActionTypes.ADD_TODOS,
        payload : todo,
        
    };
};