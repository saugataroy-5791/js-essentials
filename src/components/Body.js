import Content from "./Content";
import Sidenav from "./Sidenav";

const Body = () => {
  return (
    <div className="body">
      <Sidenav />
      <Content />
    </div>
  );
};

export default Body;
