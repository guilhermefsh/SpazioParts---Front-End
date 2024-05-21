import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled.img`
width:160px;
height:50px;
margin-top:-16px;
`
export const Container = styled.header`
background-color:black;
width:100%;
max-width:700%;
height:70px;
display:flex;
justify-content:space-around;
`;

export const Navlinks = styled.nav`
display:flex;
`;

export const LinkPages = styled(Link)`
cursor: pointer;
text-decoration:none;
color:white;
justify-content:space-around;
margin-left:20px;
margin-top:24px;
font-size:20px;
@media(max-width:448px){
    font-size:15px;
}
@media(max-width:408px){
    font-size:14px;
}
`;
