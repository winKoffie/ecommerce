import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import {
  Center,
  Container,
  Input,
  Langauage,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper
} from "./styles/Navbar.styled";
import { Badge, IconButton } from "@material-ui/core";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Langauage>EN</Langauage>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "grey", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>MEVA</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
