import React from "react";
import styled from "styled-components";

import LocalImageFile from "../Images/Nike.svg";

export default () => {
    return <Wrapper>
        <Box>
            <MessageBoxBold>한정판의 모든 것,<br/>플렉스에서 간편하게</MessageBoxBold>
          <LocalImage src={LocalImageFile} alt="Brand Image" />
        </Box>
    </Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  background-color : #ffcb00;
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


const LocalImage = styled.img`
  width: 50%;
  @media only screen and (max-width: 150px) {
    width: 100%;
    position: relative;
  }
`;
