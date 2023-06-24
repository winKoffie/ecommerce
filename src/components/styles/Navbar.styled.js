import styled from "styled-components";
export const Container = styled.div`
  height: 50px;
  @media (max-width: 380px) {
    height: 50px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 380px) {
    padding: 10px 0px;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Langauage = styled.span`
  font-size: 14px;
  cursor: pointer;
  @media (max-width: 380px) {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  @media (max-width: 380px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const Input = styled.input`
  border: none;
  padding: 10px;
  @media (max-width: 380px) {
    width: 50px;
    padding: 5px;
  }
`;
export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: Bold;
  @media (max-width: 380px) {
    font-size: 14px;
  }
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 380px) {
    justify-content: center;
    flex: 5;
  }
`;

export const MenuItem = styled.div`
  font-size: 20px;
  margin-right: 10px;

  cursor: pointer;
  @media (max-width: 380px) {
    font-size: 15px;
    margin-right: 5px;
  }
`;
