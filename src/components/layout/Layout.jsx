import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Page = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.slate900};
`;

const Layout = ({ children }) => {
  return (
    <Page>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Page>
  );
};

export default Layout;
