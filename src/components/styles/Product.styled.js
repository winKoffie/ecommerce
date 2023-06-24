import styled from "styled-components";

export const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  transition: all 1s ease;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 300px;
  align-items: center;
  justify-content: center;
  background-color: #f0f8ff;
  position: relative;
  &: hover ${Info} {
    opacity: 1;
  } ;
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
export const Image = styled.img`
  height: 80%;
  width: 80%;
  border-radius: 5px;
  z-index: 2;
`;

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  transition: all 0.5s ease;
`;
