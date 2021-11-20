import { FunctionComponent } from "react";
import { Path } from "../shared/Path";
import { NavLink } from "./NavLink";
import { Button } from "react-bootstrap";
import { useRunsController } from "../../controller/runs/useRunsController";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

interface Props {}

export const Navigation: FunctionComponent<Props> = () => {
  const controller = useRunsController();
  return (
    <div>
      <NavLink to={Path.NEW} value={"Neu"} />
      <NavLink to={Path.RUNS} value={"Läufe"} />
      <Logout onClick={() => controller.removeRunner()}>Logout</Logout>
    </div>
  );
};

const Logout = styled.button`
  color: white;
  font-size: 26px;
  margin: 20px;
  background-color: ${Styles.BACKGROUND_COLOR_MAIN};
  border: none;
`;
