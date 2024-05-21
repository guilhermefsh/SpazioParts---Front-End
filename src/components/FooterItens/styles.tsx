import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #000000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: #f5f5f5;
  width: 100%;
  padding: 20px;
`;

export const Logo = styled.img`
  width: 300px;
  margin: 16px;

  @media (max-width: 426px) {
    width: 160px;
  }
`;

export const TextP = styled.p`
  font-size: 15px;
  margin-left: 12px;
  margin-top: 8px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  flex: 1;

  @media (max-width: 900px) {
    margin-top: 40px;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 32px;
`;

export const MiddleContent = styled.div`
  text-align: center;
  margin: 1rem;
  flex: 1;

  @media (max-width: 426px) {
    display: none;
  }
  @media(max-width:768px){
    display:none;
  }
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  flex: 1;
`;

export const LinkContact = styled.a`
  margin: 5px 0;
  margin-right:12px;
  font-size: 20px;
  text-decoration: none;
  color: #f5f5f5;

  &:hover {
    text-decoration: underline;
  }
`;

export const DivLinkContact = styled.div`
display:flex;
`;

export const ContactTitle = styled.h2`
  margin-bottom: 12px;
`;

export const LinkPages = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-bottom: 1rem;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;