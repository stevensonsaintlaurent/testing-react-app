import "./App.css";
import Todo from "./component/todo";

function App() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "make dinner", completed: true },
    { id: 3, title: "invite friend", completed: false },
    { id: 4, title: "watch movie", completed: true },
  ];
  return (
    <div className="App">
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} />;
      })}
    </div>
  );
}

export default App;
