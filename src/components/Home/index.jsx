import React from 'react';
import Navbar from '../Navbar/index';
import { Wrapper, Body } from './style';
import Sidebar from '../Sidebar';
const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Body>
        <Navbar />
      </Body>
    </Wrapper>
  );
};

export default Home;
