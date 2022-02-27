import React from "react";

import useWrapperScroll from "../Model/useWrapperScroll";
import { useTransform } from "framer-motion";

import { Container, Header, Logo, Menu, Footer } from "./styles";

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Menu />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with lOVE</a>
          </li>
          <li>
            <a href="#">by Marcos Andre</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
