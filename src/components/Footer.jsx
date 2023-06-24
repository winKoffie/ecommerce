import {
  Facebook,
  Instagram,
  LocationOn,
  Markunread,
  Phone,
  Pinterest,
  Twitter
} from "@material-ui/icons";
import {
  Center,
  ContactItem,
  Container,
  Description,
  Left,
  List,
  ListItem,
  Logo,
  Right,
  SocialContainer,
  SocialIcon,
  Title
} from "./styles/Footer.styled";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MEVA COLLECTION</Logo>
        <Description>
          Lorem upsum so da mit.Lorem upsum so da mit.Lorem upsum so da
          mit.Lorem upsum so da mit.Lorem upsum so da mit
        </Description>
        <SocialContainer>
          <SocialIcon color="#3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55ACEE">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="#E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact </Title>
        <ContactItem>
          <LocationOn /> GE-345-123,Adenta, Accra
        </ContactItem>
        <ContactItem>
          <Phone />
          +233 24 437 1749
        </ContactItem>
        <ContactItem>
          <Markunread /> Contact@meva.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
