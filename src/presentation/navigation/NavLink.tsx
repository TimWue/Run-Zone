import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Path } from "../shared/Path";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

interface Props {
  to: string;
  value: string;
}

export const NavLink: FunctionComponent<Props> = ({ to, value }) => {
  return (
    <LinkContainer>
      <CustomLink to={to}>{value}</CustomLink>
    </LinkContainer>
  );
};

const LinkContainer = styled.div`
  width: 100%;
  text-align: center;
  &:hover {
    background-color: aliceblue;
    color: #282c34;
  }
`;

const CustomLink = styled(Link)`
  color: inherit;
  font-size: ${Styles.FONT_SIZE_LARGER};
  &:hover {
    text-decoration: none;
    color: inherit;
    background-color: inherit;
  }
`;
