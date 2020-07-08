import { css } from '@emotion/core';

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;700&family=Lato:wght@300;400;700&display=swap');

  html {
    font-size: 8px;
  }

  * {
    font: 2rem Lato, sans-serif;
    box-sizing: border-box;
  }

  h1 {
    font: 5rem 'Archivo Narrow';
    line-height: 6rem;
  }

  h2 {
    font: bold 4rem 'Archivo Narrow';
    line-height: 5rem;
  }

  h3 {
    font: 3rem 'Archivo Narrow';
    line-height: 4rem;
  }

  h4 {
    font: bold 2.5rem 'Archivo Narrow';
    line-height: 3rem;
  }

  h5 {
    font: bold 2rem 'Archivo Narrow';
    line-height: 3rem;
  }

  h6 {
    font: 2rem 'Archivo Narrow';
    line-height: 3rem;
  }
`;
