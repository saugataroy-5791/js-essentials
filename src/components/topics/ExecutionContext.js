import TopicText from "../TopicText";
import { EXECUTION_CONTEXT } from "../../utils/constants";
import Image from "react-bootstrap/Image";
import executionContextImage from "../../assets/execution-context.png";
import Table from "react-bootstrap/Table";

const ExecutionContext = () => {
  return (
    <div className="execution-context">
      <h2>Execution Context</h2>
      <TopicText contentArr={EXECUTION_CONTEXT} />

      <div className="content-image">
        <Image src={executionContextImage} thumbnail />
      </div>

      <div className="content-text">
        <Table bordered hover>
          <thead>
            <tr>
              <th>Creation Phase</th>
              <th>Execution Phase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul>
                  <li>
                    Global Object ("window" in browsers, "global" in Node.js) is
                    created.
                  </li>
                  <li>"this" is set.</li>
                  <li>
                    Variables & Functions are stored in memory (Hoisting).
                  </li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Code runs line-by-line.</li>
                  <li>Values are assigned to variables.</li>
                  <li>
                    Function calls/invocations create new execution contexts on
                    the call stack.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ExecutionContext;
