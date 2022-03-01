import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    /* colors */
    --clr-dark: 230, 35%, 7%;
    --clr-light: 231, 77%, 90%;
    --clr-white: 0, 0%, 100%;
    
    /* font-sizes */
    --fs-900: 9.375rem;
    
    /* font-families */
    --f-serif: "Bellefair", serif;
    --f-sans-cold: "Barlow Condensed", sans-serif;
    --f-sans-normal: "Barlow", sans-serif;
  }

  body {
    background-color: hsl(var(--clr-dark));
    color: hsl(var(--clr-white));
  }

  .bg-dark {
    background-color: hsl(var(--clr-dark));
  }

  .bg-light {
    background-color: hsl(var(--clr-light));
  }

  .ff-serif {
    font-family: var(--f-serif);
  }

  .ff-sans-cold {
    font-family: var(--f-sans-cold);
  }

  .ff-sans-normal {
    font-family: var(--f-sans-normal);
  }

  .fs-900 {
    font-size: var(--fs-900);
  }

  button {
    background-color: transparent;
    font-family: inherit;
    border: none;
  }
`;
