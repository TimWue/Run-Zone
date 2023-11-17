import * as React from "react";
import {FunctionComponent, useContext, useEffect} from "react";
import { RunnerContext } from "../../context/RunnerContext";
import styled from "styled-components";
import { Styles } from "../shared/Styles";
import { createSensorRepository } from "../../domain/sensor/SensorRepository";
import { Button } from "../../components/ui/button";
import {Card} from "react-bootstrap";
import {CardContent, CardHeader, CardTitle} from "../../components/ui/card";

interface Props {
    title: string;
    mainContent: string;
    additionalContent: string;
}
export const DashboardCard : FunctionComponent<Props> = ({title, mainContent, additionalContent}) => {

  return (
      <Card className="max-h-48 min-w-[100px] sd:min-w-[250px] p-1 overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
              {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{mainContent}</div>
          <p className="text-xs text-muted-foreground">
              {additionalContent}
          </p>
        </CardContent>
      </Card>
  );
};




