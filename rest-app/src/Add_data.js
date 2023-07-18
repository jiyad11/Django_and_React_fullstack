import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap'
import { First } from 'react-bootstrap/esm/PageItem'

const baseurl = ' http://127.0.0.1:8000/'

function Add_data() {
    const [first, setfirst] = useState({
        "subject" : "",
        "description" : ""
    })
    console.log(first)
    const handlechange = (event) =>{
        setfirst({
            ...first,
            // ... is a spread operator
            [event.target.name]:event.target.value
        })
    }
    const submitform = (e) =>{
        e.preventDefault()
        const Taskdata = new FormData();
        Taskdata.append('subject',first.subject)
        Taskdata.append('description',first.description)
        try {
            axios.post(baseurl+'details/',first).then((Response)=>console.log(Response.data))
        } catch (error) {
            console.log("error")
        }
    }
    useEffect(() => {
     document.title = 'addform'
    }, [])

    
    
  return (
    <div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>subject</Form.Label>
      <Form.Control type="text" placeholder="enter subject" onChange={handlechange} name="subject" value={first.subject} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>description</Form.Label>
      <Form.Control type="text" placeholder="enter description" onChange={handlechange} name="description" value={first.description} />
    </Form.Group>
    <Button onClick={submitform} variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  )
}

export default Add_data