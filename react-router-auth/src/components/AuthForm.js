import styled from "styled-components";
const Card=styled.div`
box-sizing:border-box;
max-width:410px;
margin:0 auto;
padding:0 20px;
display:flex;
flex-direction:column;
align-items:center;

`;

const Form=styled.div`
display:flex;
flex-direction:column;
width:100%;

`;

const Input=styled.input`
padding:2px;
border:1px solid black;
margin-bottom:2px;
font-size:9pt;
`;

const Button=styled.button`
background-color:silver;
border-color:black;
border-radius:3px;
padding:3px;
color:orange;
font-weight:bold;
width:100px;
margin-bottom:2px;
font-size:9pt;

`;

const Error=styled.div`
background-color:red;

`;
const Pic=styled.img`
width:70px;
heigh:100px;
border-radius:50%;
`;
export {
    Form,Input,Button,Error,Card,Pic
};