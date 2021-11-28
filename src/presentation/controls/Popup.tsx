import { FunctionComponent } from "react";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
}

export const Popup: FunctionComponent<Props> = ({ show, setShow }) => {
  return (
    <PopupContainer show={show}>
      <MessageContainer>Strecke gespeichert!</MessageContainer>
      <Button onClick={() => setShow(false)}>Nice</Button>
    </PopupContainer>
  );
};
const MessageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: white;
  width: 100%;
  text-align: center;
  padding: 2px 0 10px 0;
`;

const Button = styled.div`
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 30vw;
  color: black;
  background-color: ${Styles.BACKGROUND_COLOR_SECOND};
`;

interface ContainerProps {
  show: boolean;
}

const PopupContainer = styled.div<ContainerProps>`
  width: 70vw;
  border-radius: 5px;
  border: 1px solid black;
  position: absolute;
  background-color: #343a40;
  color: white;
  top: 50%;
  left: calc(50% - 70vw * 0.5);
  visibility: ${({ show }: ContainerProps) => (show ? "visible" : "hidden")};
  z-index: 500;
  padding: 8px 10px;
  font-weight: bolder;
  font-size: ${Styles.FONT_SIZE_NORMAL};
`;
