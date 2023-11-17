import * as React from "react";
import { useContext, useEffect } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import styled from "styled-components";
import { Styles } from "../shared/Styles";
import { createSensorRepository } from "../../domain/sensor/SensorRepository";
import { Button } from "../../components/ui/button";
import {Card} from "react-bootstrap";
import {CardContent, CardHeader, CardTitle} from "../../components/ui/card";
import {DashboardCard} from "./DashboardCard";
import {RunsOverviewChart} from "./RunsOverviewChart";

export const Dashboard = () => {
  const { runner } = useContext(RunnerContext);

  return (
      <div className="w-full h-full flex gap-6 flex-col justify-center">
        <div className="text-3xl font-bold">Welcome back, {runner?.runnerName}!</div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <DashboardCard title={"Total Kilometers"} mainContent={"42 km"} additionalContent={"+20.1% from last month"}/>
            <DashboardCard title={"Best Pace"} mainContent={"04:30"} additionalContent={"per kilometer"}/>
            <DashboardCard title={"Average Pace"} mainContent={"05:10"} additionalContent={"per kilometer"}/>
            <div className="col-span-2 row-span-2 min-h-[200px]">
                <RunsOverviewChart />
            </div>
        </div>
      </div>
  );
};




