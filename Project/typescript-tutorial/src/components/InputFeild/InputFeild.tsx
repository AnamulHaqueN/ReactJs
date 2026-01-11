import React, { useRef } from 'react'
import './InputFeild.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (e: React.FormEvent) => void;
}

const InputFeild = ({todo, setTodo, handleSubmit}: Props) => {
  
  const InputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit = {(e) => {
        handleSubmit(e);
        InputRef.current?.blur()
    }} >
        <input ref={InputRef} onChange = {(e) => setTodo(e.target.value)} type="input" placeholder="Enter a task" className="input__box" value={todo} />
        <button className='input__submit' type="submit" >Go</button>
    </form>
  )
}

export default InputFeild