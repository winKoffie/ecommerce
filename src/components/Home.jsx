import React from "react";
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import { Container } from "./styles/Home.styled";
import Slider from "./Slider";
import Category from "./Category";
import Products from "./Products";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Home;
