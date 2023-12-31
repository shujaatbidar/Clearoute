import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';
import {Link as LinkS } from 'react-scroll';


export const Footer = styled.nav`
    background: #2B2B39;
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
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`;

export const FooterLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 1px;
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

export const FooterMenu = styled.p`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 margib-right: -22px;



 @media screen and (max-width: 768px) {
    display: none;
 }
`;

export const FooterItem = styled.li`
 height: 80px;
`;

export const FooterLinks = styled(LinkS)`
margin: 0 0 0 100px;
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0 1rem;
 height: 100%;
 cursor: pointer;

&.active {
    border-bottom: 3px solid #01bf71;
}
`;


