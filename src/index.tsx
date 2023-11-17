import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./globals.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RunnerContextProvider } from "./context/RunnerContext";
import { CurrentRunContextProvider } from "./context/CurrentRunContext";
import {BrowserRouter, HashRouter, useHref} from "react-router-dom";

const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
        throw new Error("Notification permission not granted")
    }

}
requestNotificationPermission()
ReactDOM.render(
  <React.StrictMode>
    <RunnerContextProvider>
      <CurrentRunContextProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </CurrentRunContextProvider>
    </RunnerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
