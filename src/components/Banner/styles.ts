import styled from "styled-components";
import img from "./../../assets/weeb-image.png";

export const Container = styled.div`
  background-image: linear-gradient(rgba(3, 3, 3, 0.5), rgba(3, 3, 3, 0.5)),
    url("${img}");

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

  div {
    width: auto;
    padding-left: 60px;

    display: -webkit-flex; /* Safari */
    display: flex;
    flex-direction: column;

    h1 {
      width: 100%;
      font-weight: 900;
      font-size: 40px;
      margin-top: 30px;
      margin-bottom: 10px;

      -webkit-flex: 1; /* Safari 6.1+ */
      flex: 1;
    }

    p {
      font-weight: 500;
      width: 100%;

      letter-spacing: 3px;

      span {
        font-weight: 800;
        color: var(--pink);
      }

      -webkit-flex: 1; /* Safari 6.1+ */
      flex: 1;
    }
  }
`;
