import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavMenu, ListPageSide, NavMenuItem } from '@ks-console/shared';
import { navs } from '../../constant';
import { LayoutContainer, SidebarArea } from './style';
import MdxContainer, { GlobalStyle } from './MdxContainer';
import MarkdownToc from './MarkdownToc';

const Layout = () => {
  const location = useLocation();
  return (
    <LayoutContainer>
      <GlobalStyle />
      <ListPageSide>
        <NavMenu
          navs={navs as NavMenuItem[]}
          prefix="/usage-guide"
          pathname={location.pathname}
          collapMode
        />
      </ListPageSide>
      <MdxContainer>
        <Outlet />
      </MdxContainer>
      <SidebarArea>
        <MarkdownToc />
      </SidebarArea>
    </LayoutContainer>
  );
};

export default Layout;
