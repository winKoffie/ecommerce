import {
  Container,
  Filter,
  FilterContainer,
  FilterText,
  Option,
  Tititle
} from "../styles/ProductList.styled";
import Navbar from "../Navbar";
import announcement from "../Announcement";
import Announcement from "../Announcement";
import NewsLetter from "../NewsLetter";
import Footer from "../Footer";
import Products from "../Products";
import { Select } from "@material-ui/core";

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Tititle>Dresses</Tititle>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
