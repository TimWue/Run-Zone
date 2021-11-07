import React, { useContext } from "react";
import "./App.css";
import { Map } from "./presentation/map/wiredComponent/Map";
import { Dashboard } from "./presentation/dashboard/Dashboard";
import { RunnerContext } from "./context/RunnerContext";
import { Login } from "./presentation/login/Login";
import { Header } from "./presentation/header/Header";
import { Container, Row } from "react-bootstrap";

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
          <Map />
          <Dashboard />
        </div>
      )}
    </>
  );
}

export default App;
