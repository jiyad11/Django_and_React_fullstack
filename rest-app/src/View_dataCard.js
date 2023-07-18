import React, { useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'

const baseurl = 'http://127.0.0.1:8000/'

function View_dataCard() {
    const [first, setfirst] = useState([])

    useEffect(() => {
      fetch(baseurl+'getdata')
      .then((response)=>response.json())
      .then(data=>setfirst(data))
      .catch(err=>console.log(err))
    }, [])
    console.log(first)
    
    
  return (
    
    // <Card  style={{ width: '18rem' }}>
    //     {first.map((list,index)=>(
    //   <Card.Body>
    //     <Card.Header >{index}</Card.Header>
    //     <Card.Text>{list.subject}</Card.Text>
    //     <Card.Footer>{list.description}</Card.Footer>
    //   </Card.Body>
    //    ))}
    // </Card>
    <Container>
      <Row>
        {first.map((list, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Header>{index}</Card.Header>
                <Card.Text>{list.subject}</Card.Text>
                <Card.Footer>{list.description}</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
 
  )
}

export default View_dataCard