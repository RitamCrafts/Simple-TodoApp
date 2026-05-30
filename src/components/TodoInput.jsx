import React,{useState} from 'react'
import { useTodo } from '../context';



function TodoInput() {
  const {addTodo}=useTodo();
  const [inputBox,setInputBox]=useState("");
  return (
    <div
      className="
        flex items-center
        rounded-2xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        overflow-hidden
        md:w-2xl
        w-full
        p-2
      "
    >
      <input
        type="text"
        placeholder="What do you want to do?"
        value={inputBox}
        onChange={(e)=>{setInputBox(e.target.value);}}
        className="
          flex-1
          bg-transparent
          px-5 py-3
          text-white
          text-lg
          placeholder:text-gray-400
          outline-none
          w-full
        "
      />

      <button
        className="
          rounded-2xl
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          px-6 py-3
          font-medium
          text-white
          shadow-[0_0_20px_rgba(168,85,247,0.35)]
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]
          active:scale-102
          active:duration-75
          cursor-pointer
        "
        onClick={() => {
          const text = inputBox.trim();

          if (!text) return;

          addTodo(text);
          setInputBox("");
        }}
      >
        Add +
      </button>
    </div>
  );
}

export default TodoInput;