import styled from "styled-components";
import img from "./../../assets/weeb-image.png";

export const Container = styled.div`
  background: url("${img}");
  background-repeat: no-repeat;
  background-size: contain;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 800px;
  width: 100%;

  img {
    border-radius: 50%;
    width: 250px;
    height: 250px;

    margin-top: 50px;

    border: 2px solid var(--pink);
  }
`;
