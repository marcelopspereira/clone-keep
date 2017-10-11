import styled from 'styled-components';

const Flex = styled.div`
  align-items: ${props => props.align ? props.align : 'center'};
  display: flex;
  flex: ${props => props.flex ? props.flex : 'initial'};
  flex-direction: ${props => props.direction ? props.direction : 'row'};
  justify-content: ${props => props.justify ? props.justify : 'center'};
  padding: ${props => props.padding ? props.padding : 0}px;
`;

export default Flex;
