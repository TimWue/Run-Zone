import { FunctionComponent } from "react";
import { Path } from "../shared/Path";
import { NavLink } from "./NavLink";

interface Props {}

export const Navigation: FunctionComponent<Props> = () => {
  return (
    <div>
      <NavLink to={Path.NEW} value={"Neu"} />
      <NavLink to={Path.RUNS} value={"Läufe"} />
    </div>
  );
};
