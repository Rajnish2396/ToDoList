import React, { useContext } from 'react'
import ToDoCard from './ToDoCard'


    export default function ToDoList({todoDataList}) {



    return (
        <> 
        {todoDataList ?
        <div className="todo-list">
            {
                todoDataList.map((data, i)=>{
                    return(   
                        <ToDoCard key={i} data={data} index={i} />       
                    )
                })
           }
        </div>

    : null}

    </>
  )
}
