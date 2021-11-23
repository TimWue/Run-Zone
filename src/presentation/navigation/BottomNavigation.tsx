import React, { FunctionComponent, useState } from "react";
import { Path } from "../shared/Path";
import { NavLink } from "./NavLink";
import { useRunsController } from "../../controller/runs/useRunsController";
import styled from "styled-components";
import { Styles } from "../shared/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBiking,
  faCog,
  faPlusSquare,
  faRoute,
  faRunning,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const BottomNavigation: FunctionComponent = () => {
  return (
    <Container>
      <NavButton>
        <CustomLink to={Path.NEW}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </CustomLink>
      </NavButton>
      <NavButton>
        <CustomLink to={Path.RUNS}>
          <FontAwesomeIcon icon={faRunning} />
        </CustomLink>
      </NavButton>
      <NavButton>
        <FontAwesomeIcon icon={faBiking} />
      </NavButton>
      <NavButton>
        <FontAwesomeIcon icon={faUserFriends} />
      </NavButton>
      <NavButton>
        <FontAwesomeIcon icon={faCog} />
      </NavButton>
    </Container>
  );
};

const CustomLink = styled(Link)`
  color: inherit;
  font-size: inherit;
  &:hover {
    color: inherit;
    background-color: inherit;
  }
`;

const Container = styled.div`
  background-color: #282c34;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  z-index: 1000;
`;

const NavButton = styled.button`
  height: 60px;
  width: 20%;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: ${Styles.FONT_SIZE_LARGER};
  border: 1px solid black;
  background-color: inherit;
`;
