import React from 'react';
import styled from 'styled-components';

import bg from 'src/assets/imgs/header/bacground.png';
import arrow from 'src/assets/imgs/header/Vector 1.png';
import { Title, Description } from 'src/styles/Title';
import { Container } from 'react-bootstrap';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  background: url(${bg}) center no-repeat;
  background-size: cover;
  background-position: top center;
`;

const Content = styled.div`
  width: 100%;
  padding-top: 200px;
  padding-bottom: 300px;
  @media only screen and (max-width: 739px) {
    padding-top: 124px;
    padding-bottom: 224px;
  }
`;

const ContentDescription = styled.div`
  width: 517px;
  margin: 0 auto;
  text-align: center;
  @media only screen and (max-width: 739px) {
    width: 290px;
    .des-mobile {
      @media only screen and (max-width: 739px) {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
`;

const ContentDetail = styled.div`
  width: 392px;
  margin: 0 auto;
  text-align: center;
  @media only screen and (max-width: 739px) {
    width: 254px;
  }
  .title-mobile {
    @media only screen and (max-width: 739px) {
      font-size: 35px;
      line-height: 52px;
    }
  }
`;

const ButtonViewMore = styled.span`
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.borderColor};
  padding: 12px 18px 12px 50px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.borderColor};
  }
  .img {
    width: 20px;
    height: 10px;
  }
`;

const Carousel: React.FC = () => {
  return (
    <Wrapper>
      <Content>
        <Container>
          <ContentDetail>
            <Title
              lineHeight="81px"
              fontSize="54px"
              fontWeight="600"
              marginBottom="24px"
              className="title-mobile"
            >
              Hello, we are Design Studio.
            </Title>
          </ContentDetail>
          <ContentDescription>
            <Description
              fontSize="20px"
              fontWeight="400"
              lineHeight="28px"
              marginBottom="38px"
              color="#000"
              className="des-mobile"
            >
              We make a meaningful difference to the world’s most loved brands.
            </Description>
          </ContentDescription>
          <div className="text-center">
            <ButtonViewMore>
              View more <img src={arrow} className="img" />
            </ButtonViewMore>
          </div>
        </Container>
      </Content>
    </Wrapper>
  );
};

export default Carousel;
