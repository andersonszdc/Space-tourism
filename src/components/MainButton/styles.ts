import styled from "styled-components";

export const Container = styled.button`
  background-color: hsl(var(--clr-light), 15%);
  cursor: pointer;
  border-radius: 50%;
  transition: .4s ease-out;

  :hover {
    padding: 15%;
  }

  .expand {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: var(--f-serif);
    font-size: 32px;
    color: hsl(var(--clr-dark));
    text-transform: uppercase;

    background-color: hsl(var(--clr-white));
    aspect-ratio: 1;
    width: 300px;
    border-radius: 50%;
  }
`;
