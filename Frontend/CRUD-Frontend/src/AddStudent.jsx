import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function AddStudent() {
  const navigate=useNavigate()
    const [data,setData]=useState({
        name:"",
        email:"",
        address:""
    })
    function handleChange(e){
        let inputData=e.target.value
        let inputName=e.target.name
        setData((prev)=>{
            return{
                ...prev,
                [inputName]:inputData
            }
        })
    }

    async function handleSubmit(e){
        e.preventDefault()        
        await fetch("http://127.0.0.1:3000",
           { method:"post",
            headers:{
                'Content-Type':'application/json'
            },
             body:JSON.stringify(data)
           }
        )
        navigate("/")
    }
  return (
    <div>
        <label htmlFor="name">Name</label><br />
      <input type="text" name='name'onChange={handleChange}/><br />
      <label htmlFor="email">Email</label><br />
      <input type="text" name='email' onChange={handleChange}/><br />
      <label htmlFor="address">Address</label><br />
      <input type="text" name='address' onChange={handleChange}/><br /><br />
      <button onClick={()=>handleSubmit(event)}>Submit</button>
    </div>
  )
}

export default AddStudent
