import * as React from 'react';
import styled from '../../styles/typed-components';

interface IProps {}

const StyledText = styled.h1`
  font-size: 4rem;
`;

const Text: React.FunctionComponent<IProps> = props => {
  return <StyledText>🐔🦄🦆🐶</StyledText>;
};

export default Text;
