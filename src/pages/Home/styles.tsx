import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
//margin-bottom:60px;
`
export const Bannerspazio = styled.img`
width:100%;
height:auto;
background-size:cover;
padding:8px;
@media(max-width:426px){
    padding:0px;
}
@media(max-width:768px){
    padding:0px;
}
@media(max-width:1024px){
    padding:0px;
}
`
export const MainCont = styled.main`
display:grid;
margin-top:10px;
margin-bottom:4rem;
grid-template-columns:repeat(3, minmax(0,1fr));
gap: 1rem;

@media (max-width:1024px) {
grid-template-columns:repeat(2, minmax(0,1fr));
}

@media (max-width:768px) {
grid-template-columns:repeat(1, minmax(0,1fr));
}
`

export const SectionProduct = styled.section`
width:100%;
background-color:white;
border-radius: 0.5rem;
height:25rem;
`

export const ProductImg = styled.img`
width:100%;
border-radius:0.5rem;
max-height:18rem;
transition: all 0.5s ease;
cursor: pointer;
&:hover{
    transform:scale(1.05);
}
`
export const NameProduct = styled.p`
font-weight:bold;
margin-top:0.25rem;
margin-bottom:0.5rem;
padding-left:0.5rem;
padding-right:0.5rem;
`
export const DetailsProduct = styled.div`
display:flex;
flex-direction:column;
padding-left:0.5rem;
padding-right:0.5rem;
`

export const AgeProduct = styled.span`
color: #4a5568;
margin-bottom:1.5rem;
`
export const PriceProduct = styled.strong`
color:black;
font-weight:500;
font-size: 1.10rem;
font-weight:bold;
`
export const ItemDivider = styled.div`
width: 100%;
height: 1px;
background-color: #cbd5e0;
margin-top: 0.5rem;
margin-bottom: 0.5rem; 
`

export const LinkSection = styled(Link)`
text-decoration:none;
color:black;
`

export const PrevLoadImage = styled.div`
width:100%;
background-color:#9e9e9e;
border-radius:0.5rem;
height:288px;
`