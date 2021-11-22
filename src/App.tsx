import React, { useContext, useEffect } from "react";
import "./App.css";
import { RunnerContext } from "./context/RunnerContext";
import { Login } from "./presentation/login/Login";
import { StartRun } from "./presentation/startRun/StartRun";
import { AbsolvedRuns } from "./presentation/absolvedRuns/AbsolvedRuns";
import { Path } from "./presentation/shared/Path";
import { Route, Routes } from "react-router-dom";
import { Header } from "./presentation/header/Header";
import { Home } from "./presentation/home/Home";
import { useRunsController } from "./controller/runs/useRunsController";
import styled from "styled-components";
import { BottomNavigation } from "./presentation/navigation/BottomNavigation";

function App() {
  const { runner } = useContext(RunnerContext);
  const runsController = useRunsController();

  useEffect(() => {
    runsController.initRuns();
    runsController.initRunner();
  }, []);

  if (!runner) {
    return (
      <OuterContainer>
        <Login />
      </OuterContainer>
    );
  }
  return (
    <OuterContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <Routes>
        <Route path={Path.ROOT} element={<Home />} />
        <Route path={Path.NEW} element={<StartRun />} />
        <Route path={Path.RUNS} element={<AbsolvedRuns />} />
      </Routes>
      <BottomNavigation />
    </OuterContainer>
  );
}
const OuterContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1% 0 1% 0;
  flex-wrap: wrap;
  margin: 20px 0 20px 0;
`;

export default App;
