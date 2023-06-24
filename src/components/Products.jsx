import { Container } from "./styles/Products.styled";
import { products } from "../data/data";
import Product from "./Product";

const Products = () => {
  return (
    <Container>
      {products().map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
