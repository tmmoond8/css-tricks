import React from 'react';
import styled, { withProps } from '../../styles/typed-components';

interface IProps {
  itemSize: number;
  page: number; // 0 ~
  setPage: any;
}

const StyledBoardNavigator = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;

  & > li {
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
`;

const StyledBoardNavItem = withProps<any, HTMLLIElement>(styled.li)`
  color: ${props => (props.isSelected ? 'blue' : 'black')};
`;

const BoardNavigator = (props: IProps) => {
  const { itemSize, page, setPage } = props;
  const lastPage = Math.floor(itemSize / 10);
  const startPage = Math.floor(page / 5) * 5;
  const endPage = Math.min(startPage + 4, lastPage);
  const navItem: number[] = [];
  for (let i = startPage; i <= endPage; i++) {
    navItem.push(i);
  }

  return (
    <StyledBoardNavigator>
      {startPage !== 0 && (
        <>
          <li onClick={() => setPage(0)}>〈〈</li>
          <li onClick={() => setPage(startPage - 1)}>〈</li>
        </>
      )}
      {navItem.map(i => (
        <StyledBoardNavItem isSelected={i === page} onClick={() => setPage(i)}>
          {i + 1}
        </StyledBoardNavItem>
      ))}
      {endPage !== lastPage && (
        <>
          <li onClick={() => setPage(endPage + 1)}>〉</li>
          <li onClick={() => setPage(lastPage)}>〉〉</li>
        </>
      )}
    </StyledBoardNavigator>
  );
};

export default BoardNavigator;
