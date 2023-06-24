import styled from "styled-components";
export const Container = styled.div`
  with: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/Images/woman-Login-bg.jpeg");
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;
export const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  @media (max-width: 380px) {
    width: 75%;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 8px;
`;
export const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  coursor: poiter;
`;

export const Button = styled.button`
  width: 40%;
  padding: 15px 0px;
  margin: 15px 0px;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
`;
