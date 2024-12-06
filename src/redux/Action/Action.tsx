import { ActionTypes } from "../Contents/ActionType";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    isEditing: boolean;
}

export const addTodos = (todo:Todo[])=>{
    // console.log(todo,"fdsfjdslfdsjfldtodo");
    return {
        type : ActionTypes.ADD_TODOS,
        payload : todo,
        
    };
};

export const deleteTodo = (id:number) =>{
    return {
        type : ActionTypes.DELETE_TODO,
        payload : id,
    }
}

export const toggleTodo = (id:number)=>{
    return {
        type : ActionTypes.SINGLE_TODO_EDIT,
        payload: id,
    }
}