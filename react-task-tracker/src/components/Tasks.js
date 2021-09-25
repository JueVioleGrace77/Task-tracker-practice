import Task from "./Task";

const Tasks = ({ task, onDelete, onToggle }) => {
  return (
    <div>
      {task.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
