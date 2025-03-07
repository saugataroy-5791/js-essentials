import Content from "./Content";
import Sidenav from "./Sidenav";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useContext } from "react";
import { DrawerContext } from "../utils/context/DrawerContext";
import { TOPICS } from "../utils/topics";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const { showTopicsDrawer, setShowTopicsDrawer } = useContext(DrawerContext);
  const navigate = useNavigate();

  const handleTopicItemClick = (el) => {
    navigate(el.to);
    setShowTopicsDrawer((prev) => !prev);
  };

  const handleOffcanvasClose = () => {
    setShowTopicsDrawer((prev) => !prev);
  };

  return (
    <div className="body">
      <Offcanvas show={showTopicsDrawer} onHide={handleOffcanvasClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Topics</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            {TOPICS.map((item) => {
              return (
                <ListGroup.Item
                  variant="secondary"
                  key={item.id}
                  onClick={() => handleTopicItemClick(item)}
                >
                  {item.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
      <Sidenav />
      <Content />
    </div>
  );
};

export default Body;
