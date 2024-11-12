import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
