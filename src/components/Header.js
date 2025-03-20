import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useContext, useEffect } from "react";
import { DrawerContext } from "../utils/context/DrawerContext";
import jsLogo from "../assets/js-logo.png";

const Header = () => {
  const { version } = require("./../../package.json");

  const { setShowTopicsDrawer } = useContext(DrawerContext);

  return (
    <div className="header">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="/">
          <img className="me-1" src={jsLogo} width="30" height="30" />
          Essentials
        </Navbar.Brand>
        <Navbar.Brand href="/">v {version}</Navbar.Brand>
        <Button
          variant="outline-light"
          className="me-3 topics-btn"
          onClick={() => setShowTopicsDrawer((prev) => !prev)}
        >
          Topics
        </Button>
      </Navbar>
    </div>
  );
};

export default Header;
