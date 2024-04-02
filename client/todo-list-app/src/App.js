import Header from "./components/Header";
import Input from "./components/Input";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <div className="min-h-screen w-screen bg-white">
      <div className="h-screen">
        <Header />
        <Input />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
