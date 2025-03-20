import TopicText from "../TopicText";
import { CALL_STACK } from "../../utils/constants";

const CallStack = () => {
  return (
    <div className="call-stack">
      <h2>Call Stack</h2>
      <TopicText contentArr={CALL_STACK} />
    </div>
  );
};

export default CallStack;
