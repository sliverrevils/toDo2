import React, { useRef, useState } from "react";

interface TodoFormProps{
    addHandler(title:string):void
}

export const TodoForm: React.FC<TodoFormProps> = ({addHandler}) => { 
    
    const inputRef=useRef<HTMLInputElement>(null);
    
    const keyPressHandler=(event:React.KeyboardEvent)=>{
        if(event.key==='Enter'){
            addHandler(inputRef.current!.value);
            inputRef.current!.value='';            
        }
    }
    return (
        <div className="input-field mt2">
            <input               
                ref={inputRef}
                type="text"
                id="title"
                placeholder="Введите название дела"
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}