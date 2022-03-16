import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  padding: 0 8%;
  min-height: calc(100vh - 147px);
  column-gap: 90px;
  grid-template:
    "title image" auto
    "role image" auto
    "name image" auto
    "description image" auto
    "slider image" 1fr
    / 1fr 1fr;

  .title {
    font-family: var(--f-sans-cold);
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
    grid-area: title;
  }

  .role {
    font-family: var(--f-serif);
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 400;
    opacity: 50%;
    grid-area: role;
    margin-top: 150px;
  }

  .name {
    font-family: var(--f-serif);
    font-size: 56px;
    text-transform: uppercase;
    font-weight: 400;
    grid-area: name;
    margin-top: 16px;
    margin-bottom: 32px;
  }

  .description {
    font-family: var(--f-sans-normal);
    font-size: 18px;
    font-weight: 400;
    color: hsl(var(--clr-light));
    grid-area: description;
  }

  .slider {
    grid-area: slider;
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .oval {
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    opacity: 0.2;
    cursor: pointer;
  }

  .oval.active {
    opacity: 1;
  }

  .image {
    grid-area: image;
    margin-top: auto;
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
