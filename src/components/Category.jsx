import React from "react";
import { Container } from "./styles/Category.styled";
import { categories } from "../data/data";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <Container>
      {categories().map((item) => (
        <CategoryItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Category;
