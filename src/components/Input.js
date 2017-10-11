import React, { Component } from 'react';
import styled from 'styled-components';
import feather from 'feather-icons';
import { Colors, Sizes } from '../constants/theme';

const InputWrapper = styled.div`
  border-radius: ${ Sizes.base / 2 }px;
  box-shadow: 0 5px 10px rgba(0,0,0,.5);
  display: flex;
  flex-direction: row;
  margin: ${ Sizes.base * 2 }px;
  max-width: 300px;
  overflow: hidden;
`;

const IconWrapper = styled.span`
  align-items: center;
  background: ${ Colors.light };
  display: flex;
  height: ${ Sizes.base * 6 }px;
  line-height: ${ Sizes.base * 6 }px;
  justify-content: center;
  padding: 0 ${ Sizes.base * 2 }px;

  & svg {
    stroke: ${ Colors.primary };
  }
`;

const StyledInput = styled.input`
  border: none;
  color: ${ Colors.primary };
  font-size: ${ Sizes.text }rem;
  font-weight: bold;
  flex: 1;
  line-height: ${ Sizes.base * 6 }px;
  outline: none;
  padding: 0;
`

export default class Input extends Component {
  render () {
    const { icon } = this.props;

    return (
      <InputWrapper>
        <IconWrapper dangerouslySetInnerHTML={{__html: feather.toSvg(icon)}} />
        <StyledInput {...this.props} />
      </InputWrapper>
    );
  }
}
