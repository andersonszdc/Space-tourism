import styled from "styled-components";

export const Container = styled.main`
  margin-top: 90px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  padding: 0 8%;
  height: 100%;

  .info {
    display: flex;
    flex-direction: column;
  }

  .info__title {
    font-family: var(--f-sans-cold);
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 30%;
  }

  .info__role {
    font-family: var(--f-serif);
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 50%;
    margin-bottom: 16px;
  }

  .info__name {
    font-family: var(--f-serif);
    font-size: 56px;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 28px;
  }

  .info__description {
    font-family: var(--f-sans-normal);
    font-size: 18px;
    font-weight: 400;
    color: hsl(var(--clr-light));
  }

  .emphasis {
    margin-right: 24px;
    opacity: 25%;
    font-weight: 700;
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
