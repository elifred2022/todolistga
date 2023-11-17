import { TasksForm } from "./components/tasks/TasksForm";
import { TasksList } from "./components/tasks/TasksList";

function App() {
  const tasks = [
    {
      id: 1,
      tasksName: "Pay gas bill",
      done: false,
    },
    {
      id: 2,
      tasksName: "Do weekly food shop",
      done: true,
    },
    {
      id: 3,
      tasksName: "Clean Apartment",
      done: false,
    },
  ];

  return (
    <div className="App">
      <h1>Todo List Grupo A</h1>
      {tasks.map((task) => (
        <TasksList id={task.id} tasksName={task.tasksName} done={task.done} />
      ))}
      <TasksForm />
    </div>
  );
}

export default App;
