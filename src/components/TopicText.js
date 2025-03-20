import ListGroup from "react-bootstrap/ListGroup";

const TopicText = (props) => {
  const { contentArr } = props;
  return (
    <div className="content-text">
      <ListGroup>
        {contentArr.map((item) => {
          return (
            <ListGroup.Item variant="light" key={item.id}>
              {item.text}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default TopicText;
