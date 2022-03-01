import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  position: relative;
  padding: 0 8%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100vh;

  h2 {
    font-family: var(--f-sans-cold);
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
  }

  h1 {
    font-family: var(--f-serif);
    font-size: 150px;
    text-transform: uppercase;
  }
  p {
    font-family: var(--f-sans-normal);
    font-size: 18px;
    font-weight: 400;
  }

  .bg-img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
