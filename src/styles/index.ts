import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  padding: 0 8%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100%;

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
    font-weight: 400;
  }
  p {
    font-family: var(--f-sans-normal);
    font-size: 18px;
    font-weight: 400;
  }

  .bg-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    .content {
      align-items: center;
      text-align: center;
    }
  }
`;
