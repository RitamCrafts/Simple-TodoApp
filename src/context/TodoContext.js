import { useContext,createContext } from "react";

export const TodoContext = createContext({
    todos:[],
    addTodo: (todoMsg) => {},
    updatedTodo: (id,newTodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;