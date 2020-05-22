import React from "react";
import styled from "styled-components";

import LocalImageFile from "../Images/TopNike.svg";

export default () => {
    return <Wrapper>
        <Box>
            <MessageBoxBold>원클릭으로<br/>원하는 가격에 판매하기</MessageBoxBold>
            <SubMessageBox>보유 신발을 간편하고 신속하게 판매할 수 있습니다.<br/>
            거래가 성사되면 상품만 안전하게 보내주세요.<br/>
            검수 후 정산됩니다.
            </SubMessageBox>
            <ButtonLayout>
            <SendButton type="submit" value="판매 요청하기" />
          </ButtonLayout>
          <LocalImage src={LocalImageFile} alt="Brand Image" />
        </Box>
    </Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
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
