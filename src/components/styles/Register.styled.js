import styled from "styled-components";

export const Container = styled.div`
  with: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/Images/Woman-register-bg.jpeg");
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 8px;
`;
export const Agreement = styled.span`
  font-size: 15px;
  margin: 20px 0px;
`;

export const Button = styled.button`
  width: 40%;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  padding: 15px 20px;
  @media (max-width: 380px) {
    width: 80%;
  }
`;
