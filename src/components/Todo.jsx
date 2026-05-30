import React,{useState} from 'react'
import editImg from "../assets/pencil-edit.png"
import deleteImg from "../assets/trash-delete.png"
import saveImg from "../assets/save.png"
import { useTodo } from '../context'

function Todo({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const {updatedTodo, deleteTodo, toggleComplete} = useTodo();
  return (
    <div className='rounded-2xl
    border border-white/5
    backdrop-blur-lg
    overflow-hidden
    w-full
    py-3
    px-4
    flex
    gap-x-3
    justify-between'>
        <div className='left-side flex gap-x-3 items-center'>
            <input type='checkbox' className='accent-violet-800 w-5 h-5 cursor-pointer mt-1' 
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
        </div>
        <div className='right-side flex gap-x-3 justify-end'>
            <button className='flex justify-center items-center p-2 w-8 h-8 bg-yellow-200/40 rounded-md cursor-pointer active:scale-95 hover:bg-yellow-300/40 transition-all'
                onClick={()=>{
                    if (isTodoEditable) {
                        updatedTodo(todo.id, {
                            ...todo,
                            todo: todoMsg
                        });
                    }
                    setIsTodoEditable((prev)=>(!prev))
                }}
            >
                <img className="w-fit h-fit" src={isTodoEditable?saveImg:editImg} alt="Edit" />
            </button>
            <button className='flex justify-center items-center p-2 w-8 h-8 bg-red-300/40 rounded-md cursor-pointer active:scale-95 hover:bg-red-400/40 transition-all'
                onClick={() => deleteTodo(todo.id)}
            >
                <img className="w-fit h-fit" src={deleteImg} alt="Delete" />
            </button>
        </div>
    </div>
  )
}

export default Todo;
