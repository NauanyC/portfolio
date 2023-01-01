import React from "react";

import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </Container>
  );
};

export default Navbar;
