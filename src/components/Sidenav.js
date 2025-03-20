import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { TOPICS } from "../utils/constants";

const Sidenav = () => {
  const navigate = useNavigate();

  const handleTopicItemClick = (el) => {
    navigate(el.to);
  };

  return (
    <div className="sidenav">
      <div className="desktop-view">
        <h2>Topics</h2>
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
      </div>
    </div>
  );
};

export default Sidenav;
