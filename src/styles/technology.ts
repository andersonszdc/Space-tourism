import styled from "styled-components";

export const Main = styled.main`
  margin-top: 72px;
  display: grid;
  padding: 0 8%;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  .visual h1 {
    font-family: var(--f-sans-cold);
    font-weight: 400;
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 90px;
  }

  .emphasis {
    font-weight: 700;
    opacity: 25%;
    margin-right: 28px;
  }

  .information {
    display: flex;
    flex-direction: column;
  }

  .information__name {
    font-size: 100px;
    font-family: var(--f-serif);
    text-transform: uppercase;
  }

  .information__description {
    margin-top: 14px;
    font-family: var(--f-sans-normal);
    font-size: 18px;
    color: hsl(var(--clr-light));
  }

  .information__divider {
    border-color: #383b4b;
    width: 100%;
    margin-top: 54px;
    margin-bottom: 28px;
  }

  .boxes {
    display: flex;
    gap: 80px;
  }

  .information__box {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .label {
    font-family: var(--f-sans-cold);
    text-transform: uppercase;
    font-weight: 400;
    font-size: 14px;
    color: hsl(var(--clr-light));
  }

  .answer {
    font-family: var(--f-serif);
    text-transform: uppercase;
    font-size: 28px;
  }

  .bg-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
