/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'

function EditComponent() {
    const location=useLocation()
    const navigate=useNavigate()
    const editing=location.state.editingData
  useEffect(()=>{
    setData({
      name:editing.name,
      email:editing.email,
      address:editing.address
    })
  },[])
   
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
  const id=location.state.unique
  
    
    async function handlePut(e){
        e.preventDefault     
        const {name,email,address}=data  
        const editedData={name,email,address}
        await fetch(`http://127.0.0.1:3000/${id}`,{
            method:"put",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(editedData)
        })
        navigate("/")
    }
  return (
    <div>
      <label htmlFor="name">Name</label><br />
      <input type="text" name='name' onChange={handleChange} value={data.name}/><br />
      <label htmlFor="email">Email</label><br />
      <input type="text" name='email' onChange={handleChange} value={data.email}/><br />
      <label htmlFor="address">Address</label><br />
      <input type="text" name='address' onChange={handleChange} value={data.address}/><br /><br />
      <button onClick={()=>handlePut(event)}>Submit</button>
    </div>
  )
}

export default EditComponent
