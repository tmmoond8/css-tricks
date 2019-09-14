import React from 'react';
import styled from '../../styles/typed-components';
import { IBoardItem } from './Board';

interface IProps extends IBoardItem {}

const StyledBoardItem = styled.tr`
  text-align: center;
`;

export const BoardItem = (props: IProps) => {
  const { idx, title, author } = props;
  return (
    <StyledBoardItem key={32}>
      <td>{idx}</td>
      <td>{title}</td>
      <td>{author}</td>
    </StyledBoardItem>
  );
};

const StyledBoardHeader = styled.thead`
  tr {
    text-align: center;
    th:nth-child(1) {
      width: 10%;
    }
    th:nth-child(2) {
      width: 60%;
    }
    th:nth-child(3) {
      width: 30%;
    }
  }
`;

export const BoardHeader = props => {
  return (
    <StyledBoardHeader>
      <tr>
        <th>순번</th>
        <th>제목</th>
        <th>작성자</th>
      </tr>
    </StyledBoardHeader>
  );
};
