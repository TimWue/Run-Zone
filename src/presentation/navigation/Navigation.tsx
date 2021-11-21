import React, { FunctionComponent, useState } from "react";
import { Path } from "../shared/Path";
import { NavLink } from "./NavLink";
import { useRunsController } from "../../controller/runs/useRunsController";
import styled from "styled-components";
import { Styles } from "../shared/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Navigation: FunctionComponent = () => {
  const [show, setShow] = useState(false);
  const controller = useRunsController();
  return (
    <DropDownButton onClick={() => setShow(!show)}>
      <FontAwesomeIcon icon={faBars} />
      <DropDownContent show={show}>
        <NavLink to={Path.NEW} value={"Neu"} />
        <NavLink to={Path.RUNS} value={"Läufe"} />
        <Logout onClick={() => controller.removeRunner()}>Logout</Logout>
      </DropDownContent>
    </DropDownButton>
  );
};

const DropDownButton = styled.div`
  position: relative;
  display: inline-block;
  color: white;
  font-size: 26px;
`;

interface Props {
  show: boolean;
}
const DropDownContent = styled.div<Props>`
  color: white;
  background-color: ${Styles.BACKGROUND_COLOR_MAIN};

  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  min-width: 160px;
  padding: 12px 16px;
  z-index: 1;
  left: -60px;
`;
const Logout = styled.a`
  font-size: 26px;
  margin: 20px;
  border: none;
  cursor: pointer;
`;
