
import { useState } from "react";

function ToDo(){

    const [todos , setTodos] = useState([
        
           { text: "REACT LESSON" , done: ""},
            {text: "WORKOUT" , done: ""},
            {text: "DSA" , done: ""}
        
    ]);

    const [input,setInput] = useState("");


    function handleAddTodo(){
      
        if (input.trim() === "") return;
        
                setTodos(t => [...t,{text:input, done:false}]);
                setInput("");
    }

   
    function handleToogleTodo(index){
        setTodos(todos.map((todo,i) => i === index ? {...todo, done:!todo.done} :todo))
    }

    return (
        <div>
            <h2>My Todo List</h2>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter todo" />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo,index) =>
                <li key={index}>
                    <input type="checkbox" 
                            checked ={todo.done} 
                            onChange={() => handleToogleTodo(index)}/>


                    <span style={{ textDecoration : todo.done ? "line-through" : "none"}}>
                        {todo.text}
                    </span>
                </li>
                )}
            </ul>
        </div>
    )
}   

export default ToDo