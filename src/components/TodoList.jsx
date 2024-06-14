import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filterTodo = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      const todoText = (todo.text || "").toLowerCase();
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";

      const matchSearch = todoText.includes(searchTerm);

      return matchFilter && matchSearch;
    });
  });

  console.log("filterTodo: ", filterTodo);
  return (
    <ul>
        {filterTodo.map((todo, index) => (
          <TodoItem key={index} todo={todo} index={index} />
        ))}
    </ul>
  );
};

export default TodoList;