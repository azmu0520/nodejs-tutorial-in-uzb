import styled from 'styled-components';
import { MdAddAlert } from 'react-icons/md';
import { RiContrastDropFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { GiMoon } from 'react-icons/gi';
import { BiArrowToLeft } from 'react-icons/bi';

export const Container = styled.div`
  display: flex;
  height: 10vh;
  background: #fbfcff;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 5rem;
`;
Wrapper.Language = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 17px;
`;

Wrapper.Input = styled.input`
  padding: 5px 20px !important;
  margin-right: 1rem;
  /* width: 400px;
  height: 40px; */
`;

Wrapper.Alert = styled(MdAddAlert)`
  padding: 0 10px;
`;
Wrapper.Drop = styled(RiContrastDropFill)`
  padding: 10px;
`;

Wrapper.Github = styled(AiFillGithub)`
  padding: 10px;
`;

Wrapper.Moon = styled(GiMoon)`
  padding: 10px;
`;
Wrapper.ArrowToLeft = styled(BiArrowToLeft)`
  padding: 10px;
`;
