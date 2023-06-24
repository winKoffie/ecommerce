import { SendOutlined } from "@material-ui/icons";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title
} from "./styles/NewsLetter.styled";

const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely update from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <SendOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
