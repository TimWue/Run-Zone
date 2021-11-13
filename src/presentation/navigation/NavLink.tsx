import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Path } from "../shared/Path";

interface Props {
  to: string;
  value: string;
}

export const NavLink: FunctionComponent<Props> = ({ to, value }) => {
  return (
    <>
      <Link
        to={to}
        style={{ color: "white", fontSize: "26px", margin: "20px" }}
      >
        {value}
      </Link>
    </>
  );
};
