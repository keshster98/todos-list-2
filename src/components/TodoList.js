import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos, onTodosDelete, onTodosStatus } = props;
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onTodosDelete={(id) => {
            onTodosDelete(id);
          }}
          onTodosStatus={(id) => {
            onTodosStatus(id);
          }}
        />
      ))}
    </ul>
  );
}

export default TodoList;
