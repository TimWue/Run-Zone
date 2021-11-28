import * as React from "react";
import { Menu } from "../navigation/Menu";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Places</Logo>
      <Menu />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: ${Styles.HEADER_HEIGHT};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px 0 5px 0;
`;

const Logo = styled.h2`
  color: #eee;
  font-family: ${Styles.FONT_FAMILY_MAIN};
  font-size: ${Styles.FONT_SIZE_LARGE};
  font-weight: bold;
  line-height: 48px;
  padding: 0 5px;
  text-transform: uppercase;
  min-width: 200px;
`;
