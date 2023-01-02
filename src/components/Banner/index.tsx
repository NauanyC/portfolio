import React from "react";
import Navbar from "../Navbar";
import profile from "./../../assets/me.png";

import { Container } from "./styles";

const Banner: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <img className="profile-pic" src={profile} />
      <div>
        {" "}
        <h1>Nauany Costa</h1>
        <p>
          I'm a
          <span>
            {" "}
            web developer and a cat lover <br />
          </span>
          from Minas Gerais, Brazil
        </p>
      </div>
    </Container>
  );
};

export default Banner;
