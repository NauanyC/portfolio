import React from "react";
import profile from "./../assets/me.png";

import { Container } from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <img className="profile-pic" src={profile} />
    </Container>
  );
};

export default Banner;
