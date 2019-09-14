import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Board, { IBoardItem } from './Board';
import { BoardHeader, BoardItem } from './BoardItem';
import BoardNavigator from './BoardNavigator';

const data: IBoardItem[] = new Array(312).fill('_').map((_, idx) => ({
  author: '크리스토퍼',
  idx: String(idx + 1),
  title: '리오넬 매시 짱짱맨',
}));

storiesOf('Board', module)
  .add('Board', () => <Board title="타이틀 제목" data={data} />)
  .add('BoardHeader', () => <BoardHeader />)
  .add('BoardItem', () => (
    <BoardItem
      idx="1"
      title="조커 영화가 매우 기대가 됩니다."
      author="베트맨"
    />
  ))
  .add('BoardNavigator (0)', () => (
    <BoardNavigator
      itemSize={data.length}
      page={0}
      setPage={action('setPage')}
    />
  ))
  .add('BoardNavigator (7)', () => (
    <BoardNavigator
      itemSize={data.length}
      page={7}
      setPage={action('setPage')}
    />
  ))
  .add('BoardNavigator (31)', () => (
    <BoardNavigator
      itemSize={data.length}
      page={31}
      setPage={action('setPage')}
    />
  ));
