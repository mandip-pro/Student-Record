import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import "./App.css";
import EditComponent from "./EditComponent";

function StudentList() {
    const navigate=useNavigate()
  const [record, setRecord] = useState([]);
  const importData = async () => {
    let data = await fetch("http://localhost:3000/");
    data = await data.json();
    // console.log(data);

    setRecord(data);
  };
  useEffect(() => {
    importData();
  }, []);

  async function handleClick(id) {
    await fetch(`http://localhost:3000/${id}`, {
      method: "delete",
    });
    importData();
  }
  function handleEdit(id,student) {
    console.log(id);
    navigate("/edit",{state:{unique:id , editingData:student}})
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
          {record.map((student, index) => {
            return (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>
                  <button onClick={()=>handleEdit(student._id,student)}>edit</button>
                  <button onClick={() => handleClick(student._id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
