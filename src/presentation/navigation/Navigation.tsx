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
  font-size: ${Styles.FONT_SIZE_LARGER};
`;

interface Props {
  show: boolean;
}
const DropDownContent = styled.div<Props>`
  color: white;
  background-color: ${Styles.BACKGROUND_COLOR_MAIN};
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  z-index: 1;
  right: -200%;
  box-shadow: 0px 0px 10px #282c34;
  width: 100px;
`;
const Logout = styled.div`
  text-align: center;
  font-size: ${Styles.FONT_SIZE_LARGER};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: aliceblue;
    color: #282c34;
  }
`;
