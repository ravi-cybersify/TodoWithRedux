import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodos } from "../redux/Action/Action";
import { RootState } from "../redux/Store";
// import {RootStore} from '../redux/Store'

const Todo: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.allTodos.todos);

  interface Data {
    id: number;
    title: string;
    completed: boolean;
  }

  const handleAddTodo = () => {
    if (input.trim()) {
      const newTodoObj: Data = {
        id: Date.now(),
        title: input,
        completed: false,
      };
      dispatch(addTodos([newTodoObj])); // Dispatch array of todos
      setInput("");
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex gap-4 my-20">
        <input
          type="text"
          placeholder="Enter todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border shadow-lg px-2 py-1 w-72"
        />
        <Link to={"/"}>
          <button
            onClick={handleAddTodo}
            className="btn bg-blue-400 text-white rounded px-3 py-1 "
          >
            Add Todo
          </button>
        </Link>
      </div>
      {/* <ul>
        {todos.map((todo: Data) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Todo;
