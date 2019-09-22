import React from 'react';
import styled, { keyframes, withProps } from '../../styles/typed-components';

interface IProps {
  children: React.ReactNode;
}
const slideLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;
const slideRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;
const slideUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;
const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

const slide = () => {
  const rand = Math.floor((Math.random() * 432) % 4);
  if (rand === 3) {
    return slideRight;
  } else if (rand === 2) {
    return slideLeft;
  } else if (rand === 1) {
    return slideUp;
  } else {
    return slideDown;
  }
};

const StyledBTSLoading = styled.div`
  position: relative;
  width: 320px;
  height: 520px;
  overflow: hidden;
  margin: auto;

  & > ul {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;

const StyledImg = withProps<{ src: string; index: number }, HTMLLIElement>(
  styled.li,
)`
  position: absolute;
  z-index: ${props => 4 - props.index};
  animation: ${() => slide()} 1s ease forwards ${props => props.index + 1}s;
  & > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &::after {
    content: "${props => 3 - props.index}";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 120px;
    font-weight: 100;
    color: white;
  }
`;

const album = [
  'https://i.imgur.com/28vL3Z4.jpg',
  'https://i.imgur.com/ugsaUeS.jpg',
  'https://i.imgur.com/qLPgYDF.jpg',
  'https://i.imgur.com/dS2g4EX.jpg',
  'https://i.imgur.com/vv4Wnvp.jpg',
  'https://i.imgur.com/8bU8nak.jpg',
  'https://i.imgur.com/vuwC806.jpg',
  'https://i.imgur.com/XbYrf60.jpg',
  'https://i.imgur.com/Ap7x4F4.jpg',
  'https://i.imgur.com/a0BOEns.jpg',
  'https://i.imgur.com/bbA8sxi.jpg',
  'https://i.imgur.com/FHqaVxl.jpg',
  'https://i.imgur.com/zU32Pu4.jpg',
  'https://i.imgur.com/7jiFixC.jpg',
  'https://i.imgur.com/ZKjYAyF.jpg',
  'https://i.imgur.com/QMbHzfY.jpg',
  'https://i.imgur.com/dMD8rGg.jpg',
  'https://i.imgur.com/7bNfhgP.jpg',
  'https://i.imgur.com/8cVuG3w.jpg',
  'https://i.imgur.com/Q33hMt6.jpg',
  'https://i.imgur.com/8N3eb98.jpg',
  'https://i.imgur.com/LwMQ5GG.jpg',
  'https://i.imgur.com/hT0QB4c.jpg',
  'https://i.imgur.com/a7L2MCZ.jpg',
  'https://i.imgur.com/rVmRPIE.jpg',
  'https://i.imgur.com/4maJD4u.jpg',
  'https://i.imgur.com/L6PS7ln.jpg',
  'https://i.imgur.com/VgxQfBv.jpg',
  'https://i.imgur.com/uBCGWKQ.jpg',
  'https://i.imgur.com/rWOWLt4.jpg',
];

const imgList = [
  ...album.splice(Math.floor((Math.random() * 182) % album.length), 1),
  ...album.splice(Math.floor((Math.random() * 182) % album.length), 1),
  ...album.splice(Math.floor((Math.random() * 182) % album.length), 1),
];

const BTSLoading = (props: IProps) => {
  const { children } = props;
  return (
    <StyledBTSLoading>
      <ul>
        {imgList &&
          imgList.map((src, idx) => (
            <StyledImg key={idx} index={idx}>
              <img src={src} />
            </StyledImg>
          ))}
      </ul>
      {children}
    </StyledBTSLoading>
  );
};

export default BTSLoading;
