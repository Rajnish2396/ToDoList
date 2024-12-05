import React, { useState, useContext } from 'react'
import { Context } from '../context/Context'

export default function ToDoCard({ data, index }) {
    const [isToggle, setToggle] = useState(false)
    const [editValue, setEditValue] = useState(data)
    const[error, setError]=useState('')

    //Context function
   
    const contextLift = useContext(Context)
    const [editData, deleteData]=contextLift

    const submitHandler = (e) => {
        e.preventDefault()

        if (!isToggle) {
            setToggle(true)
        }
        if (isToggle) {
           const trimValue = editValue.trim()
            if(!trimValue){
                setError('please fil input field')             
            }
            else if(trimValue.length<3){
                setError('please fil at list 3 character in input field')  
            }
            else{
                editData(editValue, index)
                setToggle(false)
                setError("")
            }
            
        }

    }

    return (
        <>
          {error? <label className='danger'>{error}</label>:null}
            <div className="todo-item">

                {isToggle ?
                <>                <input type='text'
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)} /> 
              
                </>

                :
                <span>{data} </span>}

                <div className="buttons">
                    <button onClick={submitHandler}>
                        {
                            isToggle ?
                                "Save" :
                                "Edit"
                        }
                    </button>
                    <button onClick={(e)=>{deleteData(index)}}>Delete</button>
                </div>
            </div>
        </>
    )
}
