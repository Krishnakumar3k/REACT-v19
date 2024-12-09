import { useState } from "react";
import "./Todo.css"

export const TodoApp = ()=>{

    const [inputValue, setInputValue] = useState("");

    const handleInputChange=(value)=>{
        setInputValue(value); 
    }
    return(
        <>
            <section className="todo-container">
               <header>
               <h1>Todo List</h1>
               </header>
            <form>
                <div>
                    <input type="text" className="todo-input" autoComplete="off" placeholder="Enter a task"
                    value={inputValue}
                    onChange={(event) => handleInputChange(event.target.value)} />
                </div>
                <div>
                  <button type="submit" className="todo-btn">
                    Add Task
                  </button>
                </div>
            </form>
            </section>
        </>
    )
}