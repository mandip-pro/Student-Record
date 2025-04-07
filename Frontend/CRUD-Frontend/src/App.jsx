import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Link } from 'react-router-dom'

import './App.css'
import RouterComponent from './RouterComponent'

function App() {
  

  return (
    <>
    <h1>Student Record</h1>
    <Link to="/">Record</Link> | <Link to="/add">Add user</Link>
    <br /><hr />
    <RouterComponent/>
    </>
  )
}

export default App
