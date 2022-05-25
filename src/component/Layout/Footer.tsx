import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import { contactUs } from 'src/data/contactInfo';
import { Description, Title } from 'src/styles/Title';
import fbLogo from 'src/assets/imgs/social/fbLogo.png';
import InsLogo from 'src/assets/imgs/social/InsLogo.png';
import TwitterLogo from 'src/assets/imgs/social/TwitterLogo.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
const ContactUS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .contact-content {
    margin-left: 6%;
  }
  .item-align {
    margin-left: 0;
    margin-bottom: 54px;
  }
`;

const ContainerContact = styled.div`
  width: 50%;
  position: relative;
`;

const SocialList = styled.div`
  align-items: center;
  height: 20px;
  width: 20px;
  display: flex;
`;
const ImgSocial = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 26px;
  object-fit: cover;
`;
const Footer = () => {
  const socialImgList: any[] = [fbLogo, TwitterLogo, InsLogo];
  return (
    <Wrapper>
      <ContactUS>
        <Title lineHeight="38px" fontSize="25px" className="contact-content">
          Contact Us
        </Title>
        <ContainerContact>
          <Row className="justify-content-around item-align">
            {contactUs.map((v, i) => (
              <Col key={i} xs={5} className="item-align">
                <Title fontSize="16px" lineHeight="24px">
                  {v.title}
                </Title>
                <Description fontSize="12px" lineHeight="18px">
                  {v.description}
                </Description>
              </Col>
            ))}
          </Row>
        </ContainerContact>
      </ContactUS>
      <SocialList>
        {socialImgList.map((v, i) => (
          <ImgSocial key={i} src={v}></ImgSocial>
        ))}
      </SocialList>
    </Wrapper>
  );
};

export default Footer;
