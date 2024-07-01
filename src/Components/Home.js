import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
const Home = () => {
  return (
    <div>
        <Container>
            <br></br>
            <h1><center>Image Gallery</center></h1>
            <br></br>
      <Row>
        <Col md={4}>
          <Image src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" rounded style={{width:"200px", height:"160px"}}/>
        </Col>
        <Col md={4}>
          <Image src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" rounded style={{width:"200px", height:"160px"}}/>
        </Col>
        <Col md={4}>
          <Image src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" rounded style={{width:"200px", height:"160px"}}/>
        </Col>
        </Row>
        <br></br>
        <Row>
        <Col md={4}>
          <Image src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" rounded style={{width:"200px", height:"160px"}}/>
        </Col>
        <Col md={4}>
          <Image src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" rounded style={{width:"200px", height:"160px"}}/>
        </Col>
        <Col md={4}>
          <Image src="https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww" rounded style={{width:"200px", height:"160px"}}/>
        </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Home