import React from 'react';
import { Footer, FooterContainer, FooterLogo, FooterMenu, FooterItem, FooterLinks } from './FooterElements';


const Footerbar = () => {
  return (
    <Footer>
    <FooterContainer>
        <FooterLogo to="/">Netbook</FooterLogo>
        <FooterMenu>
            <FooterItem>
                <FooterLinks to="about">Home</FooterLinks>
            </FooterItem>
            <FooterItem>
                <FooterLinks to="community">Community</FooterLinks>

            </FooterItem>
            <FooterItem>
                <FooterLinks to="blog">Blog</FooterLinks>

            </FooterItem>
            <FooterItem>
                <FooterLinks to="signup">Events</FooterLinks>

            </FooterItem>
        </FooterMenu>
    </FooterContainer>
  </Footer>
  );
};

export default Footerbar
