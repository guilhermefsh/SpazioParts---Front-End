import styled from "styled-components";

export const InfoCont = styled.main`
width:100%;
background-color:white;
border-radius:0.5rem;
padding:1.5rem;
margin-top:-1rem;
margin-bottom:4rem;
`
export const PartsDetail = styled.div`
display:block;
flex-direction:column;
margin-bottom:0.75rem;
align-items:center;

@media (min-width:640px) {
    flex-direction:row;
}
`
export const TitleParts = styled.h1`
margin-bottom:1rem;
align-items:center;
justify-content:space-between;
font-weight:bold;
font-size:3rem;
color:black;
`
export const PriceParts = styled.h1`
margin-bottom:1rem;
align-items:center;
justify-content:space-between;
font-weight:bold;
font-size:3rem;
color:black;
`
export const ModelParts = styled.p`
font-size:20px;
`
export const InfoParts = styled.div`
width:100%;
margin-top:1rem;
margin-bottom:1rem;
gap:1.5rem;
`
export const NameParts = styled.div`
display:flex;
flex-direction:column;
gap:1rem;
`
export const Attributes = styled.div`
`
export const YearParts = styled.p`
font-size:19px;
`
export const Titles = styled.strong`
`
export const DescriptionParts = styled.div`
word-wrap: break-word; 
overflow: hidden;
text-overflow: ellipsis;
white-space: pre-wrap;
`
export const TitleDescription = styled.h3`
font-weight:bold;
font-size:25px;
`
export const CallToAction = styled.a`
background:green;
width:100%;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
margin-top: 1.5rem; 
margin-bottom: 1.5rem;
height: 2.75rem;
font-size: 1.25rem;
border-radius: 0.375rem;
font-weight: 500;
color:white;
text-decoration:none;
cursor:pointer;
`
export const CallToActionMP = styled.a`
background:#0868e4;
width:100%;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
margin-top: 1.5rem; 
margin-bottom: 1.5rem;
height: 2.75rem;
font-size: 1.25rem;
border-radius: 0.375rem;
font-weight: 500;
color:white;
padding:1.75rem;
text-decoration:none;
cursor:pointer;
`
export const CallToActionFrete = styled.a`
background:#414141;
width:100%;
display: flex;
align-items: center;
justify-content: center;
gap: 0.5rem;
margin-top: 1.5rem; 
margin-bottom: 1.5rem;
height: 2.75rem;
font-size: 1.25rem;
border-radius: 0.375rem;
font-weight: 500;
color:white;
padding:1.75rem;
text-decoration:none;
cursor:pointer;
`

export const SliderImg = styled.img`
width:100%;
height:24rem;
object-fit:cover;
margin-top:10px;
`

export const IconMP = styled.img`
width:50px;
height:40px;
`