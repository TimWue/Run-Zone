import React, { useContext, useEffect } from "react";
import "./App.css";
import { RunnerContext } from "./context/RunnerContext";
import { Login } from "./presentation/login/Login";
import { StartRun } from "./presentation/startRun/StartRun";
import { AbsolvedRuns } from "./presentation/absolvedRuns/AbsolvedRuns";
import { Path } from "./presentation/shared/Path";
import {Route, Routes, useHref, useNavigate} from "react-router-dom";
import { Dashboard } from "./presentation/home/Dashboard";
import { useRunsController } from "./controller/runs/useRunsController";
import { Detail } from "./presentation/detail/Detail";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "./components/ui/tabs";

function App() {
  const { runner } = useContext(RunnerContext);
  const runsController = useRunsController();
  const basename = useHref('/');
  const navigate = useNavigate();
  
  useEffect(() => {
    runsController.initRuns();
    runsController.initRunner();
  }, []);

  if (!runner) {
    return (
      <div>
        <Login />
      </div>
    );
  }


  return (
    <div className="w-full h-screen flex flex-col font-nunito font-semibold">
      <div className="flex-grow p-6 sm:p-12">
      <Routes >
        <Route path={Path.ROOT} element={<Dashboard />} />
        <Route path={Path.NEW} element={<StartRun />} />
        <Route path={Path.RUNS} element={<AbsolvedRuns />} />
        <Route path={Path.DETAIL} element={<Detail />} />
      </Routes>
      </div>
      <Tabs className="w-full">
        <TabsList className="w-full flex gap-1">
          <TabsTrigger className="md:w-64 w-1/4" onClick={()=> navigate(Path.ROOT)} value={""}>Home</TabsTrigger>
          <TabsTrigger className="md:w-64 w-1/4" onClick={()=> navigate(Path.NEW)} value={""}> New </TabsTrigger>
          <TabsTrigger className="md:w-64 w-1/4" onClick={()=> navigate(Path.RUNS)} value={""}> Runs </TabsTrigger>
          <TabsTrigger className="md:w-64 w-1/4" onClick={()=> navigate(Path.DETAIL)} value={""}> Detail </TabsTrigger>
        </TabsList>
        
      </Tabs>
    </div>
  );
}


export default App;
