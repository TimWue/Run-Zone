import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Path } from "../shared/Path";

interface Props {}

export const Navigation: FunctionComponent<Props> = () => {
  return (
    <>
      <Link to={Path.NEW}>New </Link>
      <Link to={Path.RUNS}>Runs </Link>
    </>
  );
};
