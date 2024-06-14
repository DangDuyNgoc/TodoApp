import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { addTodo, updateSearchTerm } from "../redux/actions";
import Filter from "./Filter";
import TodoList from "./TodoList";

const Todo = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  console.log(text);

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleSearch = (value) => {
    setSearch(value);
    dispatch(updateSearchTerm(value));
  };

  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      handleAddTodo(e.target.value);
    }
  }

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
        personal todo app
      </h2>

      <div className="flex items-center mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyPress}
          type="text"
          name="addTodo"
          id="addTodo"
          placeholder="Add Todo"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodo}
        >
          <IoAdd />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <Filter />

        <div className="flex items-center mb-4">
          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            type="filter"
            name="filterTodo"
            id="filterTodo"
            placeholder="Search"
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch />
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default Todo;
