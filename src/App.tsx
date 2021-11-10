import React, { useContext } from "react";
import "./App.css";
import { Map } from "./presentation/map/wiredComponent/Map";
import { Dashboard } from "./presentation/dashboard/Dashboard";
import { RunnerContext } from "./context/RunnerContext";
import { Login } from "./presentation/login/Login";
import { Header } from "./presentation/header/Header";
import { Container, Row } from "react-bootstrap";
import { CurrentRunControls } from "./presentation/controls/CurrentRunControls";
import { StartRun } from "./presentation/startRun/StartRun";
import { Route, Switch } from "react-router-dom";
import { AbsolvedRuns } from "./presentation/absolvedRuns/AbsolvedRuns";
import { Path } from "./presentation/shared/Path";

function App() {
  const { runner } = useContext(RunnerContext);
  return (
    <>
      {runner?.runnerName === "" ? (
        <Login />
      ) : (
        <div style={{ width: "80%", height: "100%", margin: "auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: " 1% 0 1% 0",
              flexWrap: "wrap",
              margin: "20px 0 20px 0",
            }}
          >
            <Header />
          </div>
          <Switch>
            <Route path={Path.ROOT} component={App} />
            <Route path={Path.NEW} component={StartRun} />
            <Route path={Path.RUNS} component={AbsolvedRuns} />
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
