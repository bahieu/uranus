import React from 'react';
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';

import { Description, Title } from 'src/styles/Title';
import member01 from 'src/assets/imgs/members/member01.png';
import member02 from 'src/assets/imgs/members/member02.png';
import member03 from 'src/assets/imgs/members/member03.png';
import member04 from 'src/assets/imgs/members/member04.png';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const Circle = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 100%;
  border-color: '#2029FF';
`;
const ImgMember = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WeTeam: React.FC = () => {
  const memberList: any[] = [member01, member02, member03, member04];
  return (
    <Wrapper>
      <Container>
        <Row className="justify-content-between align-items-center ">
          <Col xs={4}>
            <Title lineHeight="81px" fontSize="54px">
              We team.
            </Title>
          </Col>
        </Row>
        <Row>
          {memberList.map((v, i) => {
            return (
              <Col key={i} className="content">
                <Circle>
                  <ImgMember src={v} />
                </Circle>
                <Title lineHeight="24px" fontSize="16px">
                  member
                </Title>
                <Description lineHeight="18px" fontSize="12px">
                  By choosing a set of colors, {"you'll"} train a neural network
                  powered algorithm .
                </Description>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Wrapper>
  );
};
export default WeTeam;
