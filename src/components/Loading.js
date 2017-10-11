import React from 'react';
import styled, { keyframes } from 'styled-components';

import Text from './Text';

const glowAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  height: 40px;
  min-width: 200px;
  padding: 0 20px;
  justify-content: center;
  font-size: 0.8em;
  line-height: 40px;
  background-color: #fff;
  width: 200px;

  &:after {
    position: absolute;
    content: "";
    top: 15px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 200px;
    margin: 0 auto;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    -webkit-filter: blur(15px);
    filter: blur(15px);
    background: -webkit-gradient(
        linear,
        right top,
        left top,
        from(#6501de),
        color-stop(#ff5770),
        to(#6501de)
    );
    background: linear-gradient(to left, #6501de, #ff5770, #6501de);
    background-size: 200% 200%;
    animation: ${ glowAnimation } 1s linear infinite;
  }
`;

const Loading = ({ children }) => (
  <Wrapper>
    <Text color="primary">{ children }</Text>
  </Wrapper>
);

export default Loading;
