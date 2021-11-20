import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { CurrentRunContext } from "../../context/CurrentRunContext";
import styled from "styled-components";

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
  width: 20%;
  min-width: 120px;
  background-color: #555;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 5px 10px 5px;
`;

const Content = styled.div`
  font-family: Open Sans Condensed, sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #eee;
`;

const Property = styled(Content)`
  font-size: 28px;
`;

const Value = styled(Content)`
  font-size: 24px;
`;
