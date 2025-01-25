import {useState} from "react";
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';
import chatLoGo from "../../assets/Chat_LoGo.webp";

const FormContainer = () => {

    const navigator = useNavigate();
    const [isSignIn,setIsSignIn] = useState(true);
    const toggleForm = () => setIsSignIn(!isSignIn);
    const navigateToHome = () => navigator('/HomePage');

    return (

            <Form className="loginForm">
                
                <Form.Group className="mb-3 SiteNameWrap" controlId="fromBasicLogo">
                    <img className="appLogoWrap" src={chatLoGo} />
                    <span>ChatBuZZ</span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <span className="headingWrap">{isSignIn ? "Sign In" : "Sign Up"}</span>
                </Form.Group>
                
                {!isSignIn && <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Name" />
                </Form.Group>}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {!isSignIn && <Form.Group className="mb-3" controlId="formBasicConPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>}

                {isSignIn && <Form.Group className="mb-3 forgetPassWrap" controlId="formBasicCheckbox">
                    <a className="text-danger" href="">Forgot Password</a>
                </Form.Group>}

                <Form.Group className="mb-3 forgetPassWrap" controlId="formBasicCheckbox">
                    <Button variant="dark" type="button" className="submitBtnWrap" onClick={navigateToHome}>
                        {isSignIn ? ("Sign Up") : ("Sign In")}
                    </Button>
                </Form.Group>

                <Form.Group className="mb-3 signUpWrap" controlId="formBasicPassword">
                    <span>{isSignIn ? ("Do You want to Create New One ?") : ("Do You Want to Logged In ?") }</span>
                    <a onClick={toggleForm}>{isSignIn ? ("Sign Up") : ("Sign In")}</a>
                </Form.Group>

            </Form>
    );
}

export default FormContainer;