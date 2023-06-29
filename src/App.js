import styled from "styled-components";
import Login from "./components/pages/Login";

import Home from "./components/Home";
import Product from "./components/pages/Product";
import ProductList from "./components/pages/ProductList";
import Cart from "./components/pages/Cart";
import Register from "./components/pages/Register";
const Container = styled.div``;

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
