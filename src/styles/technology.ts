import styled from "styled-components";

export const Container = styled.main`
  padding: 0 8%;

  .title {
    font-family: var(--f-sans-cold);
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 400;
  }

  .emphasis {
    font-weight: 700;
    opacity: 25%;
    margin-right: 24px;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  .info__sub {
    margin-bottom: 12px;
    font-family: var(--f-sans-cold);
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 400;
    color: hsl(var(--clr-light));
  }

  .info__name {
    font-family: var(--f-serif);
    font-size: 56px;
    text-transform: uppercase;
    font-weight: 400;
    margin-bottom: 16px;
  }

  .info__description {
    font-family: var() (--f-sans-normal);
    font-size: 18px;
    font-weight: 400;
    color: hsl(var(--clr-light));
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
