import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const { version } = require("./../../package.json");

  return (
    <div className="header">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#">JS Essentials</Navbar.Brand>
        <Navbar.Brand href="#">v {version}</Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
