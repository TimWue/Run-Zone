import * as React from "react";
import { useContext } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

export const Home = () => {
  const { runner } = useContext(RunnerContext);

  return (
    <Container>
      <Welcome>
        Willkommen
        <br />
        {runner!.runnerName}
      </Welcome>
    </Container>
  );
};

const Welcome = styled.h3`
  font-family: ${Styles.FONT_FAMILY_MAIN};
  text-align: center;
  font-size: 3rem;
  color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10% 0 0 0;
`;
