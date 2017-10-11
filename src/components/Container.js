import styled from 'styled-components';
import background from '../assets/img/bg.jpg';

const showBg = `url(${ background })`;

const Container = styled.div`
  align-items: ${props => props.align ? props.align : 'center'};
  background: ${props => props.showBackground ? showBg : props.background};
  background-size: cover;
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
  justify-content: ${props => props.justify ? props.justify : 'center'};
  height: 100%;
  padding: ${props => props.padding ? props.padding : 32}px;
  width: 100%;
`;

export default Container;
