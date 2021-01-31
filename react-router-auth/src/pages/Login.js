import React, {useState} from "react";
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import {Card, Form,Input,Button, Error} from "../components/AuthForm";
import {useAuth} from "../context/auth";

function Login(){
    const [isLoggedIn, setLoggedIn]=useState(false);
    const [isError, setIsError]=useState(false);
    const [userName, setUserName]=useState("");
    const [password, setPassWord]=useState("");
    const {setAuthTokens}=useAuth();

    function postLogin(){
        if(userName ==="Soraya" && password ==="123")
        {
           localStorage.setItem("user", userName)
           setLoggedIn(true)
           //isLoggedIn=true;
        }
        else 
            setIsError(true);
        if(isLoggedIn)
           {alert(); return <Redirect to= "/admin" />;} 

    }
    return(
        <Card>
            <Form>
                <Input type="username" value={userName} onChange={e=>{setUserName(e.target.value);}} />
                <Input type="password" value={password} onChange={e=>{setPassWord(e.target.value);}} />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            {
                isError && <Error>userName & password were incorrect</Error>
            }
        </Card>
    );

}
export default Login;




