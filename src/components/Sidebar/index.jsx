import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to="help" onClick={toggle}>
                    Community
                </SidebarLink>
                <SidebarLink to="me" onClick={toggle}>
                    Blog
                </SidebarLink>
                <SidebarLink to="please" onClick={toggle}>
                    Events
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin' onClick={toggle}>
                    Log In
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>

  );
};

export default Sidebar;
