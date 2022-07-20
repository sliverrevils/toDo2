import React, { useEffect, useState } from "react"
import { TodoForm } from "../Components/TodoForm"
import { TodoList } from "../Components/TodoList"
import { ITodo } from "../Interfaces/interfaces";

export const TodosPage:React.FC=()=>{

    const [todos,setTodos]=useState<ITodo[]>(JSON.parse(localStorage.getItem('todos')||'[]'));

  const addHandler=(title:string)=>{
    console.log('TITLE',title);
    const newTodo:ITodo={
      title:title,
      id:Date.now(),
      completed:false
    }
    setTodos(state=>[newTodo,...state]);    
  }

  const completeToggle=(id:number)=>{
    setTodos(state=>state.map(el=>el.id===id?{...el,completed:!el.completed}:el))
  }

  const removeHandler=(id:number)=>{    
    if(window.confirm('Удалить'))
    setTodos(state=>state.filter(el=>el.id!==id));
  }


  //SAVE TO LS
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);
    return(
        <>
            <TodoForm {...{addHandler}}/>
            <TodoList {...{todos,completeToggle,removeHandler}}/>
        </>

    )
}