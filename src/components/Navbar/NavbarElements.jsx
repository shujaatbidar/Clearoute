import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';
import {Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
    background: rgba(0, 0, 0, 0);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
    display: flex;

    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: #000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0 100px 0 0;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
 display: none;

 @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
 }
`;

export const NavMenu = styled.p`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margin-right: 22px;



 @media screen and (max-width: 768px) {
    display: none;
 }
`;

export const NavItem = styled.li`
 height: 80px;
 .zero {
    font-weight: bold;
 }
 .one {
    font-weight: 300;
 }
 .two {
    font-weight: 300;
 }
 .three {
    font-weight: 300;
 }
`;


export const NavLinks = styled(LinkS)`
 color: #000;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 0rem 0 1rem;
 margin-right: 22px;
 height: 100%;
 cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-left: 340px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
 border-radius: 50px;
 background: #217BF4;
 white-space: nowrap;
 padding: 10px 22px;
 color: #fff;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out;
 text-decoration: none;

 &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
 }
`;

