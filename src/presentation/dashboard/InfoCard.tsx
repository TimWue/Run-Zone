import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { CurrentRunContext } from "../../context/CurrentRunContext";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

type Props = {
  property: string;
  value: string | number;
};

export const InfoCard = ({ property, value }: Props) => {
  return (
    <Container>
      <Property>{property}</Property>
      <Value>{value}</Value>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  min-width: 120px;
  background-color: ${Styles.BACKGROUND_COLOR_SECOND};
  padding: 10px;
`;

const Content = styled.div`
  font-family: Open Sans Condensed, sans-serif;
  font-weight: bolder;
  color: black;
`;

const Property = styled(Content)`
  font-size: ${Styles.FONT_SIZE_LARGER};
`;

const Value = styled(Content)`
  font-size: ${Styles.FONT_SIZE_LARGER};
`;
