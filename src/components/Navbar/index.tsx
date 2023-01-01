import React from "react";

import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Contact</li>
    </Container>
  );
};

export default Navbar;
