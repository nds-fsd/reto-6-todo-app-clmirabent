import styles from './App.module.css'
import { useEffect, useState } from 'react';
import AddTodo from './Components/addTodo-form';
import TodoSection from './Components/todoSection';
import TodoService from "./Services/todo_service";


function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos();
  }, [])

  const getTodos = async () => {
    var response = await TodoService.getTodos() //aquí se pide la info a la API
    setTodos(await response.json()) //aquí se actualiza la informacion que se recibe para mostrar
  };

  const createTodo = async (text) => {
    var response = await TodoService.createTodo(text, new Date(), false) //aquí se pide la info a la API
    if (response.ok) {
      var newTodo = await response.json();
      setTodos([...todos, newTodo]) //aquí se actualiza la informacion que se recibe para mostrar
    }
  };

  const updateTodo = async (todoId, newText, date, isDone) => {
    var response = await TodoService.updateTodo(todoId, newText, date, isDone) //aquí se pide la info a la API
    if (response.ok) {
      var updatedTodo = await response.json()
      const updatedTodos = todos.filter(e => e.id !== todoId)
      updatedTodos.push(updatedTodo)
      setTodos(updatedTodos.sort(compareTodos))
    }
    //aquí se actualiza la informacion que se recibe para mostrar
  };

  // -1 if todo 1 go first that todo 2, 0 if they are equal, otherwise 1
  const compareTodos = (todo_1, todo_2) => {
    if (todo_1.done && !todo_2.done)
      return 1
    if (todo_2.done && !todo_1.done)
      return -1
    if (todo_1.fecha > todo_2.fecha)
      return 1
    if (todo_2.fecha > todo_1.fecha)
      return -1
    return 0
  }

  const removeById = async (todoId) => {
    var response = await TodoService.removeById(todoId) //aquí se pide la info a la API
    if (response.ok) {
      setTodos(todos.filter(e => e.id !== todoId)) //this function will filter de Todo list and find the one clicked, If the indexes of todos are not the same, it means this item is the one we want to remove
    }
  };

  return (
    <div className={`${styles.container}`}>
      <h1>What's the Plan for Today? </h1>
      <AddTodo input={input}
        addTask={createTodo}
        setInput={setInput} />
      <TodoSection todos={todos}
        removeByID={removeById}
        updateTodo={updateTodo}

      />
    </div>
  )
}

export default App;
