import React from "react";
import Navbar from "../Navbar";
import profile from "./../../assets/me.png";

import { Container } from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <img className="profile-pic" src={profile} />
    </Container>
  );
};

export default Banner;
