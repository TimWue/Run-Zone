import * as React from "react";
import { useContext, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { createRunnerRepository } from "../../domain/runner/RunnerRepository";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

type Props = {};
export const Login = (props: Props) => {
  const [runnerName, setRunnerName] = useState<string>("");
  const runnerRepository = createRunnerRepository();
  const { setRunner } = useContext(RunnerContext);

  const clickHandle = () => {
    console.log("Login " + runnerName);
    const newRunner = { runnerName: runnerName, runnerRunIds: [] };
    runnerRepository.setRunner(newRunner);
    setRunner(newRunner);
  };

  return (
    <LoginContainer>
      <LoginHeader>Willkommen!</LoginHeader>
      <LoginName
        type={"text"}
        onChange={(e) => {
          setRunnerName(e.target.value);
        }}
        value={runnerName}
        placeholder={"Wie heißt du?"}
      />
      <LoginButton onClick={clickHandle}>Login</LoginButton>
    </LoginContainer>
  );
};

const LoginHeader = styled.h3`
  font-family: ${Styles.FONT_FAMILY_MAIN};
  font-size: ${Styles.FONT_SIZE_LARGER};
  text-transform: uppercase;
  color: #343a40;
  font-weight: bold;
  margin: 0 0 30% 0;
`;

const LoginContainer = styled.div`
  width: 20%;
  min-width: 300px;
  height: 80%;
  min-height: 500px;
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: 10px 10px #282c34;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% auto auto auto;
`;

const LoginName = styled.input`
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin: 5px;
  text-align: center;
`;

const LoginButton = styled.button`
  width: 70%;
  height: 50px;
  background-color: #343a40;
  color: white;
  border-radius: 10px;
  margin: 5px;
`;
