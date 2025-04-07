import React from 'react'
import {Routes,Route} from "react-router-dom"
import AddStudent from './AddStudent'
import StudentList from './StudentList'
import EditComponent from './EditComponent'
function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StudentList />}></Route>
        <Route path='/add' element={<AddStudent />}></Route>
        <Route path='/edit' element={<EditComponent/>}></Route>
      </Routes>
    </div>
  )
}

export default RouterComponent
