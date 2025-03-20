import TopicText from "../TopicText";
import { INTRODUCTION } from "../../utils/constants";

const Introduction = () => {
  return (
    <div className="introduction">
      <h2>Introduction</h2>
      <TopicText contentArr={INTRODUCTION} />
    </div>
  );
};

export default Introduction;
