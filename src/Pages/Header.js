import React from "react";
import styled from "styled-components";

import Logo from "../Images/Logo.svg";

export default () => {
  return (
    <Wrapper>
      <LocalImage src={Logo} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 3%;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 10px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocalImage = styled.img`
  margin-left: 40px;
  width: 100px;
  @media only screen and (max-width: 720px) {
    margin-left: 20px;
    width: 60px;
  }
`;
