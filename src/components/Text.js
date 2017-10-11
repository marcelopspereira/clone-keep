import styled from 'styled-components';

import { Colors, Sizes } from '../constants/theme';

const Text = styled.p`
  color: ${ props => Colors[props.color] };
  font-size: ${ Sizes.text }rem;
  line-height: 1.4;
  padding: 0 ${ Sizes.base * 2 }px;
`;

export default Text;
