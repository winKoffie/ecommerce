import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  @media (max-width: 380px) {
    padding: 0px;
    flex-direction: column;
  }
`;
