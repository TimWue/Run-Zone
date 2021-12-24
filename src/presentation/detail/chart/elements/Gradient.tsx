import React, { FunctionComponent } from "react";

interface Props {
  id: string;
  color: string;
}
export const Gradient: FunctionComponent<Props> = ({ color, id }) => {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={color} stopOpacity={0.8} />
      <stop offset="95%" stopColor={color} stopOpacity={0} />
    </linearGradient>
  );
};
