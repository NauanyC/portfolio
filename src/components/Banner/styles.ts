import styled, { css } from "styled-components";
import img from "./../../assets/weeb-image.png";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  padding: 16px;
  background: red;

  background: url("${img}");
  background-repeat: no-repeat;
  background-size: contain;
  background-size: cover;

  height: 800px;
  width: 100%;
`;
