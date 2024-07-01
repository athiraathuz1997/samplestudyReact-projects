import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nav=useNavigate()
    const onNavigate=()=>{
        nav("/register")
    }
    return (
        <div>
            <Container className='w-50'>
                <br/>
            <h1>Login Page</h1>
            <div style={{border:"1px solid black;",}}>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group> 
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                    <Button variant="success">Login</Button>{' '}
                </Form>
            </div>
            <Button onClick={onNavigate}>Register</Button>
            </Container>
        </div>
    )
}

export default Login