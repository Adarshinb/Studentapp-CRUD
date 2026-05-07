import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [students, setStudents] =useState([])
    var navigate = useNavigate()

axios.get("http://localhost:3000/view")
 .then((res)=>{
    console.log(res.data)
    setStudents(res.data)
 })


const DeleteStudent = (id) => {
    axios.delete("http://localhost:3000/remove/"+id)
 .then((res)=>{
    alert(res.data)
 })
}

const EditStudent = (val) => {
    navigate('/add', {state: val})
}

  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Mark</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {students.map((val)=>{
                return(
                <TableRow>
                    <TableCell>{val.Name}</TableCell>
                    <TableCell>{val.Age}</TableCell>
                    <TableCell>{val.Dept}</TableCell>
                    <TableCell>{val.Mark}</TableCell>
                    <Button variant='contained' color='error' onClick={() => DeleteStudent(val._id)}>Delete</Button>  &nbsp;&nbsp;
                    <Button variant='contained' color='primary' onClick={() => EditStudent(val)}>Edit</Button>
                </TableRow>
            )})}
            </TableBody>
        </Table>
    </div>
  )
}


export default View