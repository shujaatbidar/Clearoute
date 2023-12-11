import React from 'react';
import background from '../../images/img.png'
import { NetbookContainer, NetbookBG, ImageBG, InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, InfoBtnLink, InfoBtnLinktwo, ImgWrap, Img } from './NetbookElements'
import { Button } from 'react-scroll';
import img from '../../images/test.svg'

const NetbookSection = () => {
  return (
    <NetbookContainer>
        <NetbookBG>
          <ImageBG src={ background }/>
        </NetbookBG>
        {/* <InfoContainer> */}
          <InfoWrapper>
            <InfoRow>
              <Column1>
              <TextWrapper>
                <TopLine>Netbook Community</TopLine>
                <Heading>Your Solutions for Community!</Heading>
                <Subtitle>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</Subtitle>
                <BtnWrap>
                  <pre>
                  <InfoBtnLink to="/">About More</InfoBtnLink>    <InfoBtnLinktwo to="/">Invite Friend</InfoBtnLinktwo>
                  </pre>
                </BtnWrap>
              </TextWrapper>
              </Column1>
              <Column2>
              <ImgWrap>
              <Img src={img}/>
              </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        {/* </InfoContainer> */}
    </NetbookContainer>
  )
}

export default NetbookSection
