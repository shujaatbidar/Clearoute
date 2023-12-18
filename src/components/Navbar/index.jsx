import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink
 } from './NavbarElements';


 
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to="/">Netbook</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="community">Community</NavLinks>

                </NavItem>
                <NavItem>
                    <NavLinks to="blog">Blog</NavLinks>

                </NavItem>
                <NavItem>
                    <NavLinks to="signup">Events</NavLinks>

                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="signin">Log In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar
