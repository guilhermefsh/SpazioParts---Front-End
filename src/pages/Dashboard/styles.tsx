import styled from "styled-components";

export const PartsMain = styled.main`
display:grid;
margin-bottom:40px;
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
margin-top:20px;
`

export const ProductImg = styled.img`
width:100%;
border-radius:0.5rem;
max-height:18rem;
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

export const PrevLoadImage = styled.div`
width:100%;
background-color:#9e9e9e;
border-radius:0.5rem;
height:288px;
`
export const RemoveImgBtn = styled.button`
position:absolute;
background:black;
border-color:red;
width:3.5rem;
height:3.5rem;
border-radius: 50%;
box-shadow: 2px 8px 8px rgba(0,0,0,0.1);
margin-left:14rem;
margin-top:6rem;
cursor: pointer;
`
