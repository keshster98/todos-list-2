import TodoCheckboxFill from "./TodoCheckboxFill";
import TodoCheckboxNoFill from "./TodoCheckboxNoFill";
import TodoDeletebox from "./TodoDeletebox";

function TodoItem(props) {
  const { text = "Null", isCompleted = false } = props;

  return isCompleted === true ? (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <TodoCheckboxFill />
      <span className="ms-2">{text}</span>
      <TodoDeletebox />
    </li>
  ) : (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <TodoCheckboxNoFill />
      <span className="ms-2">{text}</span>
      <TodoDeletebox />
    </li>
  );
}

export default TodoItem;
