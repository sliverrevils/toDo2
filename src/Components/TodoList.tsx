import React from "react";
import { ITodo } from "../Interfaces/interfaces";

type TodoListProps={
    todos:ITodo[],
    //completeToggle?(id:number):void, //( ? - необязательный параметр)
    completeToggle(id:number):void, //первый синтаксис 
    removeHandler:(id:number)=>void //второй
}

export const TodoList:React.FC<TodoListProps> = ({todos,completeToggle,removeHandler})=>{


    const removeItem=(event:React.MouseEvent,id:number)=>{
        event.preventDefault();
        removeHandler(id);
    }
    


    if(!todos.length){
        return(
            <p className="center">
                Список пуст
            </p>
        )
    }

    return(
       <ul> 
        {todos.map((todo)=>{
            return(
                <li className={`todo ${todo.completed?'completed':''}`} key={todo.id}>
                <label>
                    <input type="checkbox" checked={todo.completed} onChange={()=>completeToggle(todo.id)}/>
                    <span>{todo.title}</span>
                    <i className="material-icons red-text" onClick={event=>removeItem(event,todo.id)}>delete</i>
                </label>
            </li>
            )
        })}
       
       </ul> 
    )
}