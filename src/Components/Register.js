import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/esm/Container';
import Login from './Login';
import { Link } from 'react-router-dom';

const Register = () => {
    const [input, setinput] = useState({
        name: "",
        address: "",
        number: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
    const getInput = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
        
    }

    const savedetails = (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <div>
            <Container className='w-50'>
                <br />
                <h3 style={{ color: "#198754" }}>Register here..</h3>
                <Form onSubmit={savedetails}>
                    <FormControl size="lg" type="text" placeholder="Name" onChange={getInput} name='name' /><br></br>
                    <FormControl size="md" type="text" placeholder="Address" onChange={getInput} name='address' />
                    <br />
                    <FormControl size="md" type="number" placeholder="Phone Number" onChange={getInput} name='number' />
                    <br />
                    <FormControl size="md" type="text" placeholder="Email Address" onChange={getInput} name='email' />
                    <br />
                    <FormControl size="md" type="password" placeholder="Password" onChange={getInput} name='password' />
                    <br />
                    <FormControl size="md" type="password" placeholder="Confirm Password" onChange={getInput} name='confirmpassword' /><br />
                    <Form className='d-flex'>
                        <div><Form.Label>Qualification : </Form.Label></div>&nbsp;

                        <div className="mb-3">
                            <Form.Check
                                inline
                                label="B.Tech"
                                name="group1" />
                            <Form.Check
                                inline
                                label="BSC"
                                name="group1" />
                            <Form.Check
                                inline
                                label="DiPloma" />
                        </div>

                    </Form>
                    <Button variant="success" type='submit'>Save</Button>{' '}
                </Form>
                <p>if you are already registered..?<Link to={"/login"}>Login here...</Link></p>
                <p><Link to={"/home"}>Route to home page</Link></p>
            </Container>
        </div>
    )
}

export default Register