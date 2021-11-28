import React, { FunctionComponent, useState } from "react";

import styled from "styled-components";
import { Styles } from "../shared/Styles";

export const SwipeOverlay: FunctionComponent = ({ children }) => {
  const [startPosition, setStartPosition] = useState<number>();
  const [isActive, setIsActive] = useState(false);

  const touchMoveHandle = (e: React.TouchEvent<HTMLDivElement>) => {
    const moveX = e.targetTouches[0].clientX;
    if (startPosition! - moveX > 50) {
      setIsActive(true);
    }
    if (startPosition! - moveX < -50) {
      setIsActive(false);
    }
  };

  const touchStartHandle = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartPosition(e.targetTouches[0].clientX);
  };

  return (
    <Container
      onTouchStart={touchStartHandle}
      onTouchMove={touchMoveHandle}
      isActive={isActive}
    >
      {isActive && children}
    </Container>
  );
};

interface OverlayProps {
  isActive: boolean;
}

const Container = styled.div<OverlayProps>`
  /*
  display: ${({ isActive }: OverlayProps) => (isActive ? "block" : "none")};
*/
  display: flex;
  color: white;
  width: inherit;
  height: 100%;
  z-index: ${({ isActive }: OverlayProps) => (isActive ? 50 : 30)};
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  background-color: ${({ isActive }: OverlayProps) =>
    isActive ? "rgba(52, 58, 64, 0.9)" : "rgba(52, 58, 64, 0)"};
  font-size: ${Styles.FONT_SIZE_LARGER};
  justify-content: center;
  align-items: center;
`;
