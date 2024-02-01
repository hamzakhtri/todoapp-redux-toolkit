import { useSelector } from 'react-redux';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const todos = useSelector(state => state.todos);

  return (
    <>
      <h1 className='text-center text-5xl bg-black text-white p-3'>Learn About Redux </h1>
      <div className='flex justify-center'>

        <TodoForm />
      </div>
      <div className="container mx-auto">
        {todos.length > 0 && todos.map((todo) => {
          return (
            <li key={todo.id} className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded">
              <TodoItem todo={todo} />
            </li>
          )
        })}
      </div>
    </>
  );
}

export default App;
