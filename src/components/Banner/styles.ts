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
`;
