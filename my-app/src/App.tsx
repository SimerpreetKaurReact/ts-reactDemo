
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const todos = [new Todo("learn react"), new Todo("Learn typescript")]
  const onAddTodo = (text: string) => {
    todos.push(new Todo(text))
    console.log(todos)
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodo} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
