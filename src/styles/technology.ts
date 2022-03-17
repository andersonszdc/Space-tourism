import styled from "styled-components";

export const Container = styled.main`
  padding: 0 0 0 8%;

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
    grid-template: "slider info image";
    align-items: center;
    gap: 40px;
  }

  .slider {
    display: flex;
    flex-direction: column;
    gap: 16px;
    grid-area: slider;
  }

  .oval {
    text-align: center;
    width: 80px;
    line-height: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;

    font-size: 32px;
    font-family: var(--f-serif);

    background-color: transparent;
    border-color: hsl(var(--clr-white), 20%);
    color: hsl(var(--clr-white));
  }

  .oval.active {
    background-color: hsl(var(--clr-white));
    border-color: hsl(var(--clr-white));
    color: hsl(var(--clr-dark));
  }

  .info {
    display: flex;
    flex-direction: column;
    grid-area: info;
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
    font-family: var(--f-sans-normal);
    font-size: 18px;
    font-weight: 400;
    color: hsl(var(--clr-light));
  }

  .image {
    display: flex;
    justify-content: flex-end;
    grid-area: image;
  }

  .bg-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }

  @media (max-width: 1000px) {
    padding-left: 0;

    .title {
      padding-left: 8%;
    }

    .slider {
      justify-content: center;
      flex-direction: row;
    }

    .info {
      text-align: center;
    }

    .info__description {
      padding: 0 15%;
    }

    .content {
      grid-template:
        "image"
        "slider"
        "info";
    }
  }
`;
