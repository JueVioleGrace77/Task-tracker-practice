import Task from "./Task";

const Tasks = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      {task.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default Tasks;
