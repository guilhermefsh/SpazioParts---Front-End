import styled from "styled-components";

export const ImageCont = styled.div`
width: 100%;
background-color: #fff;
padding: 0.75rem;
border-radius: 0.5rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-top:2rem;

@media (min-width: 640px) {
    flex-direction: row;
}
`

export const BTImage = styled.button`
border-width: 2px;
width: 12rem;
border-radius: 0.5rem;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-color: #888;
height: 8rem;

@media (min-width: 768px) {
    .custom-button {
        width: 12rem;
    }
}
`
export const UploadIcon = styled.button`
position:absolute;
cursor:pointer;
background-color:transparent;
border:none;
`
export const UploadInput = styled.input`
cursor:pointer;
opacity:0;
`
export const DivInput = styled.div`
cursor: pointer;
`

export const FormCont = styled.div`
width: 100%;
background-color: #fff;
padding: 0.75rem;
border-radius: 0.5rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-top: 0.5rem;
margin-bottom:4rem;

@media (min-width: 640px) {
    flex-direction: row;
    }
`

export const FormInfo = styled.form`
width:100%;
margin-bottom:80px;
`
export const FormItens = styled.div`
margin-bottom:0.75rem;
width:100%;
`
export const TitleInput = styled.p`
margin-bottom:0.5rem;
font-weight:bold;
`
export const FormInput = styled.input`
width:100%;
padding:0.25rem;
height:2.5rem;
`
export const DivTwoInputs = styled.div`
display: flex;
width: 100%;
margin-bottom: 0.75rem;
flex-direction: row;
align-items: center;
gap: 1rem;
`
export const DescriptionArea = styled.textarea`
border-width: 2px;
width: 100%;
border-radius: 0.375rem;
height: 6rem;
padding-left: 0.5rem; 
padding-right: 0.5rem; 
padding:0.75rem;
`

export const ButtonRegister = styled.button`
width: 100%;
border-radius: 0.375rem;
background-color: #000000;
color: #ffffff;
font-weight: bold;
height: 2.5rem;
font-size:20px;
cursor: pointer;
`
export const ViewImageCont = styled.div`
width: 100%;
height: 8rem;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`
export const ImgView = styled.img`
width: 100%;
height: 8rem;
border-radius: 0.5rem;
object-fit: cover;
`

export const RemoveImgBtn = styled.button`
position:absolute;
background:transparent;
border:none;
cursor: pointer;
`