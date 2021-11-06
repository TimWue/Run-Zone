import * as React from "react";
import { useContext } from "react";
import { CurrentRunContext } from "../../context/CurrentRunContext";

type Props = {};
export const Dashboard = (props: Props) => {
  const { speed } = useContext(CurrentRunContext);

  return <>{speed && <div>Speed: {speed}</div>}</>;
};
