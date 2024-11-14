import { useState } from "react";

function AddTodoForm(props) {
  const { onNewTodosAdded } = props;
  const [todosName, setTodosName] = useState("");

  return (
    <div className="mt-4">
      <form className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          name="todos_name"
          value={todosName}
          required
          onChange={(event) => {
            setTodosName(event.target.value);
          }}
        />
        <button
          className="btn btn-primary btn-sm rounded ms-2"
          onClick={(event) => {
            event.preventDefault();

            if (todosName === "") {
              alert("Please enter a todo!");
            } else {
              onNewTodosAdded(todosName);
              setTodosName("");
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
