import React from "react";
import { Link } from "react-router-dom";
import AllTask from "./AllTask";

const TodoTask: React.FC = () => {
  return (
    <div className="">
      <div className="flex justify-center ">
        <div className="my-12">
          <h1 className="text-2xl font-bold my-4">Todo List</h1>
          <Link to={"/createTodo"}>
            <button
              type="button"
              className="bg-blue-500 text-white rounded px-3 py-1"
            >
              Create Task
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-10 border-t">
        <AllTask />
      </div>
    </div>
  );
};

export default TodoTask;
