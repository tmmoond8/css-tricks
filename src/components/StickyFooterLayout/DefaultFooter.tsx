import React from 'react';
import styled from '../../styles/typed-components';

const StyledFooter = styled.div`
  height: 3rem;
  background-color: ${props => props.theme.color.grey};
  color: white;
  line-height: 3rem;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    this is footer
  </StyledFooter>
)

export default Footer;