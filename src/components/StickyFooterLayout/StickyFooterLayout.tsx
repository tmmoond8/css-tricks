import React from 'react';
import styled from '../../styles/typed-components';
import DefaultFooter from './DefaultFooter';

interface IProps {
  Footer?: React.ReactComponentElement<any>;
  children?: React.ReactNode;
}

const Layout = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const ChildrenWrapper = styled.div`
  flex: 1;
`;
const FooterWrapper = styled.footer`
  flex-shrink: 0;
`;

const StickyFooterLayout = (props: IProps) => (
  <Layout>
    <ChildrenWrapper>{props.children}</ChildrenWrapper>
    <FooterWrapper>
      {props.Footer ? props.Footer : <DefaultFooter />}
    </FooterWrapper>
  </Layout>
);

export default StickyFooterLayout;
