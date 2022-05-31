import React, { Children } from 'react';

import Header from '../Header/Header';

import { LayoutWrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {children}
    </LayoutWrapper>
  )
}

export default Layout;