import React, { useState } from 'react'

export default function FormTodo({app_Form_Lift}) {

  const[todoDataList, setDataList]=app_Form_Lift


  const [todo, setTodo]=useState("")
  const [error, setError]=useState("")


  const inputHandler =(e)=>{
    setError("")
    setTodo(e.target.value)
  }

  const submitHandler = (e)=>{
    e.preventDefault()
    if(!todo.length){
      setError("Kindly provide a valid to-do item using the input field before submitting.")
      return
    }
    else if(todo.length<3){
      setError("Please provide a to-do item with at least 3 characters before submitting.")      
      return
    }
    let isDuplicateValue = todoDataList.filter((data)=>{
      return data === todo
    })
    console.log(isDuplicateValue.length)
    if(isDuplicateValue.length !==0){
      setError("You have already this todo list, Please try diffrent to do list")
      return
    }
    
    setDataList([...todoDataList, todo])
    setTodo("")
    setError("")
  }

  return (
    <>
    <form  onSubmit={submitHandler}>    
      <div className='todoAddBox'>
        <input type='text' name="name" value={todo|| ""} placeholder='add Todo List' onChange={inputHandler} />
        <button><i className="fa-solid fa-circle-arrow-right"></i></button>
        </div>
    </form>
    {error? <label className='danger'>{error}</label>:null}
    </>
  )
}
