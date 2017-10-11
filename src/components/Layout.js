import React, { Component } from 'react';
import styled from 'styled-components';

import Container from './Container';
import Title from './Title';
import Flex from './Flex';
import Editor from './Editor';

const StyledContainerEditor = styled(Flex)`
  background: #eee;
  border-radius: 4px;
  margin-left: 60px;
  padding: 12px;
`

export default class Layout extends Component {
  state = {
    menuOpen: true
  }

  render () {
    const { title } = this.props;

    return (
      <Container direction="row" align="flex-start" justify="flex-start">
        <Flex direction="row" flex="1">
          <Title mv="0" color="primary">{ title }</Title>
          <StyledContainerEditor flex="1">
            <Editor />
          </StyledContainerEditor>
        </Flex>
      </Container>
    )
  }
}
