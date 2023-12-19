import React, { useRef, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, SearchItem, SearchInput, NavBtn, NavBtnLink
 } from './NavbarElements';
 import newimage from "../../images/logo.svg"


 
const Navbar = ({ toggle }) => {

  return (
    <>
      <Nav>
        <NavbarContainer>
          <img src={newimage} width="30px"/>
            <NavLogo to="/">Netbook</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about" className='zero'>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="community" className='one'>Community</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="blog" className='two'>Blog</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="signup" className='three'>Events</NavLinks>
                </NavItem>
            </NavMenu>
            <SearchItem>
              <SearchInput placeholder='🔍  Search Here ..'/>
            </SearchItem>
            <NavBtn>
                <NavBtnLink to="signin">Log In</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar
