import { useContext, useEffect, useState } from 'react'
import './App.css'
import FormTodo from './component/FormTodo'
import ToDoList from './component/ToDoList'
import { Context } from './context/Context'

function App() {

  const [todoDataList, setDataList] = useState(JSON.parse(localStorage.getItem("key")))
   app_Form_Lift =[todoDataList, setDataList]
  



  const editData = (editValue, index) => {
    setDataList((prevState) =>(prevState.map((item, idx) => (idx === index ? editValue : item))));
  };
  const deleteData =(index)=>{
    setDataList((prevState)=> prevState.filter((_, ind)=>ind !==index))

    
  }
  const contextLift =[editData, deleteData]

useEffect(()=>{
  localStorage.setItem("key", JSON.stringify(todoDataList))
},[todoDataList])



  return (
  
    <Context.Provider value={contextLift}>
     <main>
     
      <header>Plan to do anything</header>
      <FormTodo app_Form_Lift={app_Form_Lift}  />
      <ToDoList todoDataList={todoDataList}  />
     </main>
    </Context.Provider>
  )
}

export default App
