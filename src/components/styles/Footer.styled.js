import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 380px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`;
export const Logo = styled.h1`
  margin-bottom: 10px;
`;
export const Description = styled.p`
  margin: 30px 0;
`;
export const SocialContainer = styled.div`
  display: flex;
`;
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-bottom: 19px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 380px) {
    display: none;
  }
`;
export const Title = styled.h3`
  margin-bottom: 30px;
`;
export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
export const Right = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 380px) {
    background-color: "#eee";
  }
`;

export const ContactItem = styled.div`
  width: 50%;
  margin-bottom: 15px;
  @media (max-width: 380px) {
    width: 100%;
  }
`;
