import React, { useState } from 'react';
import styled from '../../styles/typed-components';
import { BoardHeader, BoardItem } from './BoardItem';
import BoardNavigator from './BoardNavigator';

export interface IBoardItem {
  idx: string;
  title: string;
  author: string;
}
interface IProps {
  title: string;
  data: IBoardItem[];
}

const StyledBoard = styled.div`
  width: 768px;

  table {
    width: 100%;
    margin: 0 auto;
  }
`;

const Board = (props: IProps) => {
  const { title, data = [] } = props;
  const [page, setPage] = useState(0);
  return (
    <StyledBoard>
      <table>
        <caption>{title}</caption>
        <BoardHeader idx="순번" title="제목" author="작성자" />
        <tbody>
          {data
            .filter((_, idx) => Math.floor(idx / 10) === page)
            .map(item => (
              <BoardItem
                key={item.idx}
                idx={item.idx}
                title={item.title}
                author={item.author}
              />
            ))}
        </tbody>
      </table>
      <BoardNavigator itemSize={data.length} page={page} setPage={setPage} />
    </StyledBoard>
  );
};

export default Board;
