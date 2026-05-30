import { useState,useEffect } from 'react'
import GlassCard from './components/GlassCard'
import background from "/bg.png"
import logo from "./assets/logo-1.png"
import TodoInput from './components/TodoInput'
import { TodoProvider } from './context'
import Todo from './components/Todo'

function App() {
  const [todos,setTodos] = useState([]);

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos);
    
    if(storedTodos && storedTodos.length>0){
      setTodos(storedTodos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])
  

  const addTodo = (todoMsg) => {
    const todo = {
      id:Date.now(),
      todo:todoMsg,
      completed:false
    };
    setTodos((prev) => ([todo,...prev]));
  };

  const updatedTodo = (id,newTodo) => {
    setTodos((prev)=>(prev.map((prevTodo)=>
      ((prevTodo.id===id)?(newTodo):(prevTodo))
    )))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=>(prev.filter((todo)=>(
      todo.id!==id
    ))))
  }

  const toggleComplete = (id) => {
    setTodos((prev)=>(prev.map((todo)=>(
      ((todo.id===id)?{...todo,completed: !todo.completed}:todo)
    )
    )))
  }

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updatedTodo,toggleComplete}}>
      <div className='relative text-white flex flex-col items-center justify-start pt-8 pb-6 min-h-screen'>
        <img src={background} className='fixed inset-0 w-full h-full object-cover pointer-events-none'/>
        <GlassCard>
          <div className='flex flex-col w-full gap-1 min-h-fit items-center justify-center'>
            <img src={logo} alt="logo" className='h-12 w-12 -mt-3 mb-1'/>
            <h1 className='text-3xl text-center font-semibold'>My Todos</h1>
            <p className='text-xs opacity-60 mb-3'>Stay organized. Get things done.</p>

            <TodoInput />
            <div className="light-line mt-3 mb-3 h-[0.5px] w-[97%] bg-white/20"/>

            <div className='flex flex-col gap-y-3 items-stretch w-full'>
              {
                todos.map((todo)=>(
                  <Todo todo={todo} key={todo.id}/>
                ))
              }
            </div>

          </div>
        </GlassCard>
      </div>
    </TodoProvider>
  )
}

export default App
