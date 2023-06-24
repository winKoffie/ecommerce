import {
  Bottom,
  Button,
  Container,
  Details,
  HR,
  Image,
  Info,
  PriceDetail,
  Product,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductDetail,
  ProductID,
  ProductName,
  ProductPrice,
  ProductSize,
  Summary,
  SummaryItem,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper
} from "../styles/Cart.styled";
import Navbar from "../Navbar";
import Announcement from "../Announcement";
import NewsLetter from "../NewsLetter";
import Footer from "../Footer";
import { Add, Remove } from "@material-ui/icons";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="Images/Product/Women-wear/women-4.jpeg" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Classic Wear
                  </ProductName>
                  <ProductID>
                    <b>ID:</b>244371749
                  </ProductID>
                  <ProductColor color="#c53126" />
                  <ProductSize>
                    <b>Size:</b>L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>GHs 100</ProductPrice>
              </PriceDetail>
            </Product>
            <HR />
            <Product>
              <ProductDetail>
                <Image src="Images/Product/Men-wear/men-7.jpeg" />
                <Details>
                  <ProductName>
                    <b>Product:</b>Classic Wear
                  </ProductName>
                  <ProductID>
                    <b>ID:</b>244371749
                  </ProductID>
                  <ProductColor color="#c53126" />
                  <ProductSize>
                    <b>Size:</b>L
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>GHs 600</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal:</SummaryItemText>
              <SummaryItemText>Ghs 700.00</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Delivery:</SummaryItemText>
              <SummaryItemText>Ghs 20.00</SummaryItemText>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delivery Discount:</SummaryItemText>
              <SummaryItemText>Ghs -5.00</SummaryItemText>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemText>Ghs 715.00</SummaryItemText>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Cart;
