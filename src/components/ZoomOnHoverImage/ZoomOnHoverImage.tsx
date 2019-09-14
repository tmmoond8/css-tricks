import React from 'react';
import styled from '../../styles/typed-components';

interface IProps {
  url: string;
}

const StyledZoomOnHoverImage = styled.div`
  height: 100px;
  width: 100px;
  cursor: pointer;
  overflow: hidden;
  & > img {
    width: 100%;
    transition: transform 0.3s;
    transform: scale(1);
    &:hover {
      transition: transform 0.5s;
      transform: scale(1.3);
    }
  }
`;

const ZoomOnHoverImage = (props: IProps) => {
  const { url } = props;
  return (
    <StyledZoomOnHoverImage>
      <img src={url} />
    </StyledZoomOnHoverImage>
  );
};

export default ZoomOnHoverImage;
