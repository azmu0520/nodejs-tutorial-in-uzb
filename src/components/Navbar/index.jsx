import React from 'react';
import { Container, Wrapper } from './style';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Wrapper.Input placeholder='Search' />
        <Wrapper.Language>English</Wrapper.Language>
        <Wrapper.Alert size='20' />
        <Wrapper.Drop size='20' />
        <Wrapper.Github size='20' />
        <Wrapper.Moon size='20' />
        <Wrapper.ArrowToLeft size='25' />
      </Wrapper>
    </Container>
  );
};

export default Navbar;
