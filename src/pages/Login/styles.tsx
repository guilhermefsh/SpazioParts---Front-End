import styled from "styled-components";

export const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
`

export const Logo = styled.img`
width:250px;
margin-left:68px;
margin-top:2rem;
`

export const Content = styled.div`
background-color:Black;
width:400px;
height:450px;
border-radius:10%;
box-shadow: 3px 3px black;
`

export const LoginForm = styled.form`
display:block;
justify-content:center;
align-items:center;
`

export const LabelForm = styled.label`
color:#fff;
font-weight:bolder;
align-items:center;
display:flex;
justify-content:center;
margin-top:2.5rem;
font-size:20px;
`

export const ButtonLogin = styled.button`
width:30%;
height:2rem;
margin-left:8.5rem;
margin-top:40px;
border-radius:0.795rem;
font-size:14px;
cursor: pointer;
color:black;
font-weight:bolder;

&:hover{
background-color:#aaaaaa;
}
`