import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

const baseurl = 'http://127.0.0.1:8000'
function View_data() {
  const [first, setfirst] = useState([])

  useEffect(() => {
    fetch(baseurl+'/getdata/')
    .then(response=>response.json())
    .then(data=>setfirst(data))
    .catch(err=>console.log(err))
  }, [])
  console.log(first)

  const handleDelete = async (id) => {
    await fetch(`${baseurl}/delete_data/${id}/`, {
      method : "DELETE",
      headers : {
        "content_type" : "application/json"
      }
    })
    setfirst(first.filter(_list => _list.id !== id))
  } 

  return (
    <div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>sl no.</th>
          <th>subject</th>
          <th>description</th>
          
        </tr>
      </thead>
      <tbody>
        {first.map((list,index)=>(
        <tr key={list.id}>
          <td>{index+1}</td>
          <td>{list.subject}</td>
          <td>{list.description}</td>
          <td><Button variant='danger' onClick={()=>handleDelete(list.id)}>Delete</Button></td>
        </tr>
        ))}
      </tbody>
    </Table>
  
    </div>
  );
}

export default View_data