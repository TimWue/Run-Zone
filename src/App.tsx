import React, { useContext } from "react";
import "./App.css";
import { Map } from "./presentation/map/wiredComponent/Map";
import { Dashboard } from "./presentation/dashboard/Dashboard";
import { RunnerContext } from "./context/RunnerContext";
import { Login } from "./presentation/login/Login";
import { Header } from "./presentation/header/Header";
import { CurrentRunControls } from "./presentation/controls/CurrentRunControls";

function App() {
  const { runner } = useContext(RunnerContext);
  return (
    <>
      {runner?.runnerName === "" ? (
        <Login />
      ) : (
        <>
          <Header />
          <Map />
          <Dashboard />
          <CurrentRunControls />
        </>
      )}
    </>
  );
}

export default App;