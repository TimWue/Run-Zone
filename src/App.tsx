import React, { useContext } from "react";
import "./App.css";
import { RunnerContext } from "./context/RunnerContext";
import { Login } from "./presentation/login/Login";
import { StartRun } from "./presentation/startRun/StartRun";
import { AbsolvedRuns } from "./presentation/absolvedRuns/AbsolvedRuns";
import { Path } from "./presentation/shared/Path";
import { Route, Routes } from "react-router-dom";
import { Header } from "./presentation/header/Header";

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
            {<Header />}
          </div>

          <Routes>
            <Route path={Path.NEW} element={<StartRun />} />
            <Route path={Path.RUNS} element={<AbsolvedRuns />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
