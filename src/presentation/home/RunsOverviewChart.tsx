import * as React from "react";
import {FunctionComponent, useContext, useEffect} from "react";
import { RunnerContext } from "../../context/RunnerContext";
import styled from "styled-components";
import { Styles } from "../shared/Styles";
import { createSensorRepository } from "../../domain/sensor/SensorRepository";
import { Button } from "../../components/ui/button";
import {Card} from "react-bootstrap";
import {CardContent, CardHeader, CardTitle} from "../../components/ui/card";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export const RunsOverviewChart : FunctionComponent= () => {

    function getPreviousDay(date:Date) {
        return new Date(date.getTime() - 24 * 60 * 60 * 1000);
    }

// Function to generate an array of dates for the last n days
    function getLastNDays(n : number) {
        const datesArray = [];
        let currentDate = new Date(); // Current date and time

        for (let i = 0; i < n; i++) {
            datesArray.push(currentDate);
            currentDate = getPreviousDay(currentDate);
        }

        return datesArray;
    }
    const last30DaysArray = getLastNDays(30).reverse();
    
    const data = last30DaysArray.map(date => {return {name: date.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit'
        }), km:  (Math.random() > 0.5 ? Math.floor(Math.random() * 21) : 0)}})
    
  return (
      <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
              <Bar dataKey="km" fill="#8884d8" />
              <XAxis dataKey="name" />
              <Tooltip/>
          </BarChart>
      </ResponsiveContainer>
  );
};




