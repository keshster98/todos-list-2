function TodoItem(props) {
  const { id, todo, isCompleted, onTodosDelete, onTodosStatus } = props;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button
          className={isCompleted ? "btn btn-sm btn-success" : "btn btn-sm"}
          onClick={() => {
            onTodosStatus(id);
          }}
        >
          <i
            className={isCompleted ? "bi bi-check-square" : "bi bi-square"}
          ></i>
        </button>
        <span
          className={isCompleted ? "ms-2 text-decoration-line-through" : "ms-2"}
        >
          {todo}
        </span>
      </div>
      <div>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            const confirm = window.confirm(
              "Are you sure you want to delete this todo?"
            );

            if (confirm) {
              onTodosDelete(id);
            }
          }}
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
