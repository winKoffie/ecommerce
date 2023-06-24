import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import {
  Arrow,
  Button,
  Container,
  Image,
  ImageContainer,
  ImageDesc,
  ImageInfoContainer,
  ImageTitle,
  Slide,
  Wrapper
} from "./styles/Slider.styled";
import { useState } from "react";
import { sliderItems } from "../data/data";

const Slider = () => {
  const [slideIndex, setslideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {" "}
        {sliderItems().map((items) => (
          <Slide key={items.id} bg={items.bg}>
            <ImageContainer>
              <Image src={items.img} />
            </ImageContainer>
            <ImageInfoContainer>
              <ImageTitle>{items.title}</ImageTitle>
              <ImageDesc>{items.desc}</ImageDesc>
              <Button>SHOP NOW</Button>
            </ImageInfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
