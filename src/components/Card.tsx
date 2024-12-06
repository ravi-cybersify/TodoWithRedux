import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/Store";
import { deleteTodo, toggleTodo } from "../redux/Action/Action";

const Card: React.FC = () => {
  const todos = useSelector((state: RootState) => state.allTodos.todos);

  const dispatch = useDispatch();

  interface Data {
    id: number;
    title: string;
    completed: boolean;
    isEditing : boolean;
  }

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const ToggleEdit = (id: number) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="flex">
      {todos?.map((todo: Data) => (
        <div key={todo.id} className="shadow-lg my-8 mx-2 w-80">
          <div className="bg-green-300 h-1"></div>
          <span className="px-4 py-1 bg-green-300 rounded w-20">React</span>
          <div className="my-7 mx-4 flex flex-col gap-9">
            <p>{todo.title}</p>
            <div className="text-right text-green-300">
              <button
                type="button"
                className="mr-2"
                onClick={() => ToggleEdit(todo.id)}
              >
                <FiEdit size={20} />
              </button>
              <button type="button" onClick={() => handleDelete(todo.id)}>
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
