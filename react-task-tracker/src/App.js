import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 12:30pm",
      reminder: true,
    },
  ]);

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
  };

  //Delete Task
  const deleteTask = (id) => {
    setTask(task.filter((task) => task.id !== id));
    console.log(id);
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTask(
      task.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {task.length > 0 ? (
        <Task task={task} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Taks to Show"
      )}
    </div>
  );
}

export default App;
