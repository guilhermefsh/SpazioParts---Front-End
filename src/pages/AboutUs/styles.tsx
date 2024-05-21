import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 2rem;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto 4rem auto;
  max-width: 100%;
  height: auto;
  padding: 0 20px;
  box-sizing: border-box;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    height: 25rem;
  }
`;

export const ImgAbout = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  margin: 20px 0;
  
  @media(min-width: 768px) {
    margin-left: 40px;
    margin-top: -28px;
  }
`;

export const TextSpazio = styled.p`
  font-size: 25px;
  width: 100%;
  max-width: 600px;
  margin-top: 0.5rem;
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;

  @media(min-width: 768px) {
    text-align: left;
  }
`;
