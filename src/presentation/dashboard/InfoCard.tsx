import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { CurrentRunContext } from "../../context/CurrentRunContext";

type Props = {
  property: string;
  value: string | number;
};
export const InfoCard = ({ property, value }: Props) => {
  return (
    <div
      style={{
        width: "20%",
        minWidth: "120px",
        backgroundColor: "#555",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px 5px 10px 5px",
      }}
    >
      <div
        style={{
          fontFamily: "Open Sans Condensed, sans-serif",
          fontSize: "28px",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#eee",
        }}
      >
        {property}
      </div>
      <div
        style={{
          fontFamily: "Open Sans Condensed, sans-serif",
          fontSize: "24px",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#eee",
        }}
      >
        {value}
      </div>
    </div>
  );
};