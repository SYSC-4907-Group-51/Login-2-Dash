// src/Login.js 
import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const navigate = useNavigate();

    return (
        <>
      
        <Card> 
            <Card.Body>
                <h2 className = 'text-center mb-4'>Log in</h2>
                <Form>
                    <Form.Group id ="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email"/>

                    </Form.Group>
                    <Form.Group id ="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" />
                    </Form.Group>
                    
                    <Button onClick = {() => navigate("/dashboard")} className = "w-100 text" type = "submit">Log in</Button>
    
                </Form>
            </Card.Body>
        </Card>

        <div className = "w-100 text-center mt-2">
            Need an account? <Link to = "/signup">Sign Up</Link>
        </div>

        <Card>
            <Card.Body>
                <h3 className= 'text-center mb-4'>Health Care Provider Key</h3>
                <Form>
                    <Form.Group id = "key">
                        <Form.Label>Key</Form.Label>
                        <Form.Control type = "key"/>
                    </Form.Group>
                    <Button onClick = {() => navigate("/dashboard")} className = "w-100 text" >Log in</Button>
                </Form>
            </Card.Body>
        </Card>
        </>
        
    );

};
export default Login; 
