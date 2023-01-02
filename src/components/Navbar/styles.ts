import styled from "styled-components";

export const Container = styled.ul`
  height: 100px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0px 40px;

  font-weight: 700;

  li {
    margin: 25px;
    list-style: none;
  }

  li.button-list-item {
    color: var(--pink);
    border: 2px solid var(--pink);
    border-radius: 5px;
    padding: 8px 14px;
  }
`;
