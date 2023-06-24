import styled from "styled-components";
export const Container = styled.div``;
export const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media (max-width: 380px) {
    padding: 10px;
    flex-direction: column;
  }
`;
export const ImageContainer = styled.div`
  flex: 1;
`;
export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  @media (max-width: 380px) {
    height: 50vh;
  }
`;
export const InfoContainer = styled.div`
  padding: 0px 50px;
  flex: 1;
  @media (max-width: 380px) {
    padding: 10px;
  }
`;
export const Title = styled.h1`
  font-weight: 200;
`;
export const Desc = styled.p`
  margin: 20px 0px;
`;
export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 380px) {
    width: 90%;
  }
`;
export const Filter = styled.div`
  display: flex;
  margin: 20px 0px;
`;
export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
export const FilterSize = styled.select`
  margin-left: 10px;
`;

export const FilterSizeOption = styled.option`
  width: 20px;
`;

export const AddContainer = styled.div`
  margin: 20px 0px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 380px) {
    width: 80%;
  }
`;
export const AmountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;
export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
export const Button = styled.button`
  padding: 15px;
  margin-left: 20px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
