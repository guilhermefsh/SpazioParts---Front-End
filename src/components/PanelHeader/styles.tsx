import styled from "styled-components";
import { Link } from "react-router-dom";

export const PanelContainer = styled.div`
width: 100%;
align-items: center;
display: flex;
height: 2.5rem;
background-color: #000000;
border-radius: 0.5rem;
color: #fff; 
font-weight: 500;
gap: 1rem;
margin-top:12px;
`
export const PageLinks = styled(Link)`
margin-left: 2.5rem;
text-decoration:none;
color:white;
`
export const BTLogout = styled.button`
margin-left:auto;
margin-right:12px;
background-color:black;
border:none;
cursor: pointer;
`