import * as React from "react";
import { Navigation } from "../navigation/Navigation";
import styled from "styled-components";

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
  font-size: 48px;
  font-weight: bold;
  line-height: 48px;
  padding: 0 5px;
  text-align: center;
  text-transform: uppercase;
  min-width: 200px;
`;
