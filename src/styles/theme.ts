import baseStyled, { css, ThemedStyledInterface } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc: object, label: string) => {
  acc[label] = args => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(args)}
    }
  `;
  return acc;
}, {});

const color = {
  black: '#282C2F',
  lightGrey: '#EFF1F2',
  red: '#D74145',
  grey: '#A8A8A8',
  white: 'white',
};

const theme = {
  media,
  color,
};
export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
