import styled, { keyframes } from 'styled-components';

import { Colors, Sizes } from '../constants/theme';

const glowAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

const glowStyles = `
  &:after {
    position: absolute;
    content: "";
    top: 15px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    filter: blur(15px);
    background: -webkit-gradient(linear, right top, left top, from(#6501DE), color-stop(#FF5770), to(#6501DE));
    background: linear-gradient(to left, #6501DE, #FF5770, #6501DE);
    background-size: 200% 200%;
    animation: ${ glowAnimation } 1s linear infinite; 
  }
`;

const Button = styled.button.attrs({
  className: 'button'
  })`
    background: ${ props => Colors[props.mode] };
    border: 1px solid ${ Colors.primary };
    border-radius: ${ Sizes.base / 2 }px;
    box-shadow: ${props => props.mode === 'light' ? '0 5px 10px rgba(0,0,0,.5)' : ''};
    color: ${ props => props.mode === 'light' ? Colors.primary : Colors.light };
    cursor: pointer;
    display: inline-block;
    font-size: ${ Sizes.text }rem;
    min-width: 120px;
    padding: ${ Sizes.base }px ${ Sizes.base * 2 }px;
    position: relative;
    text-align: center;
    z-index: 0;

    & + .button {
      margin-left: ${ Sizes.base }px;
    }

    ${ props => props.glow ? glowStyles : '' }
`;

export default Button;
