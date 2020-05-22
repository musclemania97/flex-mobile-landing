import React from "react";
import styled from "styled-components";

import LocalImageFile from "../Images/Chart.svg";

export default () => {
    return <Wrapper>
        <Box>
            <MessageBoxBold>갖고싶은 신발<br/>시세까지 한번에</MessageBoxBold>
            <SubMessageBox>갖고 싶은 신발의 시세를 한 눈에 비교하고<br/>
            원하는 가격을 등록하세요. 거래가 성사되면<br/>
            전문검수팀의 완벽한 검수 후, 상품을 보내드립니다.
            </SubMessageBox>
            <ButtonLayout>
            <SendButton type="submit" value="구매 요청하기" />
          </ButtonLayout>
          <LocalImage src={LocalImageFile} alt="Brand Image" />
        </Box>
    </Wrapper>;
};

const Wrapper = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`;




const Box = styled.div`
  width: 100%;
  margin: 0 auto;
  height: auto;
  margin-top: 100px;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`
const MessageBox = styled.p`
  text-align: center;
  font-size:40px;
  font-weight: nomal;
  color: #222222;
  padding: 0px;
  margin: 0px;
  @media only screen and (max-width: 600px) {
    font-size:30px;
  }
`

const MessageBoxBold = styled(MessageBox)`
  font-weight: bold;
  font-size:40px;
`

const SubMessageBox = styled.p`
    margin-top:30px;
   color:#666666;
   font-weight: 400;
   font-size:20px;
   text-align: center;
   @media only screen and (max-width: 600px) {
    max-width:300px;
    margin: 0 auto;
    font-size:15px;
    margin-top:15px;
  }
`


const ButtonLayout = styled.div`
  display: flex;
  width: 400px;
  margin: 50px auto;
  text-align: center;
  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

const SendButton = styled.input`
  cursor: pointer;
  background: #ffffff
  border: 3px solid #000000;
  border-radius: 50px;
  opacity: 1;
  font-size: 25px;
  letter-spacing: 2px;
  color: #000000;
  width: 100%;


  @media only screen and (max-width: 150px) {
    font-size: 20px;
    width: 100%;
    
  }
`;


const LocalImage = styled.img`
  width: 50%;
  @media only screen and (max-width: 150px) {
    width: 100%;
    position: relative;
  }
`;
