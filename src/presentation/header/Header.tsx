import * as React from "react";
import { Navigation } from "../navigation/Navigation";

type Props = {};
export const Header = (props: Props) => {
  return (
    <>
      <h2
        style={{
          color: "#eee",
          fontFamily: "Open Sans Condensed, sans-serif",
          fontSize: "48px",
          fontWeight: "bold",
          lineHeight: "48px",
          padding: "0 5px",
          textAlign: "center",
          textTransform: "uppercase",
          minWidth: "200px",
        }}
      >
        Run Zone
      </h2>
      <Navigation />
    </>
  );
};
