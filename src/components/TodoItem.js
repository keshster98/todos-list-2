function TodoItem(props) {
  const { text = "Null", isCompleted = true } = props;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button
          className={isCompleted ? "btn btn-sm btn-success" : "btn btn-sm"}
        >
          <i className="bi bi-check-square"></i>
        </button>
        <span className="ms-2">{text}</span>
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
