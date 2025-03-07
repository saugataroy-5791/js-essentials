import ListGroup from "react-bootstrap/ListGroup";
import { Link, useNavigate } from "react-router-dom";
import { TOPICS } from "../utils/topics";

const Sidenav = () => {
  const navigate = useNavigate();

  const handleTopicClick = (el) => {
    navigate(el.to);
  };
  return (
    <div className="sidenav">
      <h2>Topics</h2>

      <ListGroup>
        {TOPICS.map((item) => {
          return (
            <ListGroup.Item
              key={item.id}
              onClick={() => handleTopicClick(item)}
            >
              {item.name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Sidenav;
