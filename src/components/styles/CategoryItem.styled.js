import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  @media (max-width: 380px) {
    height: 30vh;
  }
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  color: grey;
  font-weight: 600;
`;
