import {
  Button,
  Container,
  Form,
  Input,
  Link,
  Title,
  Wrapper
} from "../styles/Login.styled";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>LOGIN</Button>
          <Link>YOU DONT REMEMBER YOUR PASSWORD?</Link>

          <Link>CREAT A NEW ACCOUNT?</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
