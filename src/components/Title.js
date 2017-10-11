import styled from 'styled-components';

import { Colors, Sizes } from '../constants/theme';

const Title = styled.h1`
  color: ${ props => Colors[props.color] };
  font-size: ${ Sizes.title }rem;
  line-height: 1;
  margin: ${ props => props.mv ? props.mv : 32 }px ${ props => props.mh ? props.mh : 0 }px;
  text-shadow: 0 0 40px rgba(255, 255, 255, .4);
`;

export default Title;
