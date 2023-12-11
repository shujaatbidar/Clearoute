import React from 'react';
import background from '../../images/img.png'
import { NetbookContainer, NetbookBG, ImageBG, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, InfoBtnLink, ImgWrap, Img, ImgTwo, ImgThree, ListItems } from './NetbookElementsTwo'
import { Button } from 'react-scroll';
import img from '../../images/square.jpg'
import imgTwoN from '../../images/house.jpeg'
import imgThreeN from '../../images/car.jpeg'



const NetbookSectionTwo = () => {
  return (
    <NetbookContainer>
        <NetbookBG>
        <ImageBG />
        </NetbookBG>
        {/* <InfoContainer> */}
          <InfoWrapper>
            <InfoRow>
              <Column1>
              <TextWrapper>
                <TopLine>What's Netbooks?</TopLine>
                <Heading>Why Join to Netbook Social Network?</Heading>
                <Subtitle>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</Subtitle>
                <BtnWrap>
                  <ul>
                    <li>
                      Groups
                    </li>
                    <li>
                      Messages
                    </li>
                    <li>
                      Share
                    </li>
                  </ul>
                </BtnWrap>
              </TextWrapper>
              </Column1>
              <Column2>
              <ImgWrap>
              <Img src={img}/>
              <ImgTwo src={imgTwoN}/>
              <ImgThree src={imgThreeN}/>
              </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        {/* </InfoContainer> */}
    </NetbookContainer>
  )
}

export default NetbookSectionTwo
