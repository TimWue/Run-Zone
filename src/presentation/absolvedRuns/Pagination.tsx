import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { Run } from "../../domain/run/Run";
import { createMapService } from "../../domain/map/MapService";
import { LatLng } from "leaflet";
import styled from "styled-components";
import { Styles } from "../shared/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  n: number;
  setOuterStartIndex: (endIndex: number | undefined) => void;
  setOuterEndIndex: (endIndex: number | undefined) => void;
}

export const Pagination: FunctionComponent<Props> = ({
  n,
  setOuterStartIndex,
  setOuterEndIndex,
}) => {
  const [pageSize, setPageSize] = useState(3);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(pageSize);
  const [maxPage, setMaxPage] = useState(Math.ceil(n / pageSize));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let newStartindex = (currentPage - 1) * pageSize;
    let newEndindex =
      newStartindex + pageSize > n ? n : newStartindex + pageSize;

    setStartIndex(newStartindex);
    setOuterStartIndex(newStartindex);
    setEndIndex(newEndindex);
    setOuterEndIndex(newEndindex);
  }, [pageSize, currentPage]);

  const changeCurrentPageByButton = (change: number) => {
    setCurrentPage(validateCurrentPage(currentPage + change));
  };

  const changeCurrentPageByInput = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentPage(validateCurrentPage(+e.currentTarget.value));
  };

  const validateCurrentPage = (newPage: number): number => {
    if (newPage > maxPage) {
      newPage = maxPage;
    }
    if (newPage < 1) {
      newPage = 1;
    }
    return newPage;
  };

  return (
    <PaginationContainer>
      <ChangeButton onClick={() => changeCurrentPageByButton(-1)}>
        {"<"}
      </ChangeButton>
      <PageInput onChange={changeCurrentPageByInput} value={currentPage} />
      <MaxPage> / {maxPage}</MaxPage>
      <ChangeButton onClick={() => changeCurrentPageByButton(1)}>
        {">"}
      </ChangeButton>
    </PaginationContainer>
  );
};

const ChangeButton = styled.button`
  background-color: #343a40;
  color: white;
  border: 1px white;
`;
const MaxPage = styled.div`
  font-size: inherit;
  width: 30px;
  padding: 2px 5px;
`;

const PageInput = styled.input`
  width: 25px;
  text-align: center;
  font-size: inherit;
`;
const PaginationContainer = styled.div`
  color: white;
  display: flex;
  font-size: ${Styles.FONT_SIZE_NORMAL};
  float: right;
`;
