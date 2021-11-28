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
import { Styles } from "./presentation/shared/Styles";
import { Detail } from "./presentation/detail/Detail";

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
      <Header />
      <PageContainer>
        <Routes>
          <Route path={Path.ROOT} element={<Home />} />
          <Route path={Path.NEW} element={<StartRun />} />
          <Route path={Path.RUNS} element={<AbsolvedRuns />} />
          <Route path={Path.DETAIL} element={<Detail />} />
        </Routes>
      </PageContainer>
      <BottomNavigation />
    </OuterContainer>
  );
}
const OuterContainer = styled.div`
  width: 100vw;
  height: 100vh - ${Styles.BOTTOM_NAVIGATION_HEIGHT};
`;

const PageContainer = styled.div`
  height: calc(
    100vh - ${Styles.BOTTOM_NAVIGATION_HEIGHT} - ${Styles.HEADER_HEIGHT}
  );
  width: 100%;
`;

export default App;
