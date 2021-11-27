import * as React from "react";
import { Menu } from "../navigation/Menu";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

export const Header = () => {
  return (
    <>
      <Logo>Places</Logo>
      <Menu />
    </>
  );
};

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
