import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Path } from "../shared/Path";
import styled from "styled-components";

interface Props {
  to: string;
  value: string;
}

export const NavLink: FunctionComponent<Props> = ({ to, value }) => {
  return (
    <div>
      <CustomLink to={to}>{value}</CustomLink>
    </div>
  );
};

const CustomLink = styled(Link)`
  color: white;
  font-size: 26px;
  margin: 20px;
`;
