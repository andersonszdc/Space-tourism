import styled from "styled-components";

export const Main = styled.div`
  .header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
    padding-left: 5%;
  }

  .divider {
    z-index: 1;
    margin-left: 64px;
    width: calc(100% - 32px);
    border-color: hsl(var(--clr-white), 25%);
  }

  .navbar {
    padding: 32px 160px 32px 120px;
    background-color: hsl(var(--clr-white), 5%);
    backdrop-filter: blur(81.5485px);
  }

  .list {
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 48px;
  }
`;

type StyledItemProps = {
  isActive: boolean;
};

export const StyledItem = styled.li<StyledItemProps>`
  position: relative;

  .content {
    cursor: pointer;
    display: flex;
    gap: 8px;
    font-family: var(--f-sans-cold);
    text-transform: uppercase;
    color: ${({ isActive }) =>
      isActive ? "hsl(var(--clr-white))" : "hsl(var(--clr-light))"};
  }

  ${({ isActive }) =>
    isActive
      ? `
    .flare {
      opacity: 1;
      background-color: hsl(var(--clr-white));
    }
  `
      : `
    .flare {
      background-color: hsl(var(--clr-white));
      opacity: 0;
    }
  `};

  ${({ isActive }) =>
    !isActive &&
    `
  .content:hover + .flare {
    opacity: 1;
    background-color: hsl(var(--clr-white), 50%);
  }
    `};

  .flare {
    bottom: -32px;
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    transition: 0.5s ease-out;
  }

  span {
    font-weight: 700;
  }
`;
