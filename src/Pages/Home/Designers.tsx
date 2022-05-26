import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import { designers } from '../../data/designer';
import { Title, Description } from 'src/styles/Title';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 82px;
  /* padding-left: 140px; */
  .dsner-content {
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .dsner-des {
    max-width: 200px;
  }
  .dsner-container {
    padding: 0;
  }
`;

const ImgDsner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Designer: React.FC = () => {
  return (
    <Wrapper>
      <Row className="m-0">
        {designers.map((v, i) => (
          <Col key={i} className="dsner-content">
            <ImgDsner src={v.img} />
            <Title fontSize="25px" lineHeight="38px">
              {v.title}
            </Title>
            <Description
              fontSize="14px"
              lineHeight="21px"
              className="dsner-des"
            >
              {v.description}
            </Description>
          </Col>
        ))}
      </Row>
    </Wrapper>
  );
};

export default Designer;
