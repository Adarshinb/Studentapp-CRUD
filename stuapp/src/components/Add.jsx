import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = () => {
    var [students, setStudents] =useState({Name:'', Age:'', Dept:'', Mark:''})
    var navigate = useNavigate()
    var location = useLocation()

    console.log(location.state)

    const inputHandler = (e) => {
        setStudents({...students, [e.target.name]: e.target.value})
        console.log(students)
    }

    const addfunction = () => {

        if(location.state != null){
            axios.put("http://localhost:3000/edit/"+location.state._id, students)
            .then((res)=>{
                alert(res.data)
                navigate('/')
            })
        } else {
            axios.post("http://localhost:3000/add", students)
            .then((res)=>{
                alert(res.data)
                navigate('/')
            })
        }
    }

    useEffect(()=>{
    if(location.state != null){
        setStudents({
            Name: location.state.Name,
            Age: location.state.Age,
            Dept: location.state.Dept,
            Mark: location.state.Mark
        })
    }
    },[])

  return (
    <div>
        <h1>Add Student</h1>

        <TextField label='Name' variant='outlined' name='Name' 
        value={students.Name} onChange={inputHandler}/><br /><br />

        <TextField label='Age' variant='outlined' name='Age' 
        value={students.Age} onChange={inputHandler}/><br /><br />

        <TextField label='Department' variant='outlined' name='Dept' 
        value={students.Dept} onChange={inputHandler}/><br /><br />

        <TextField label='Mark' variant='outlined' name='Mark' 
        value={students.Mark} onChange={inputHandler}/><br /><br />

        <Button variant='contained' onClick={addfunction}>Add Student</Button>
        
    </div>
  )
}

export default Add