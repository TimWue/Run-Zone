import * as React from "react";
import { Navigation } from "../navigation/Navigation";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

export const Header = () => {
  return (
    <>
      <Logo>Run Zone</Logo>
      <Navigation />
    </>
  );
};

const Logo = styled.h2`
  color: #eee;
  font-family: Open Sans Condensed, sans-serif;
  font-size: ${Styles.FONT_SIZE_LARGER};
  font-weight: bold;
  line-height: 48px;
  padding: 0 5px;
  text-align: center;
  text-transform: uppercase;
  min-width: 200px;
`;
