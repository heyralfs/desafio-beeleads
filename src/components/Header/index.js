import React from "react";
import styled from "styled-components";

import LogoBee1 from "../../img/Logo-Bee-1.png";
import BigTester from "../../img/Big-Tester.png";

const HeaderWrapper = styled.header`
  height: 90px;
  width: 376px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 8px 8px;
  padding: 16px 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  @media screen and (max-width: 568px) {
    width: 100%;
  }
`;

const LogoWrapper = styled.div`
  width: 50%;
  text-align: center;
  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.15);
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={LogoBee1} />
      </LogoWrapper>

      <LogoWrapper>
        <img src={BigTester} />
      </LogoWrapper>
    </HeaderWrapper>
  );
}

export default Header;
