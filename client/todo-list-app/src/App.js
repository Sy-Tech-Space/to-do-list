import "./App.css";
import Header from "./components/Header";
// import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-200">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
