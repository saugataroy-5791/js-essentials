import CodeBox from "../CodeBox";
import CODE_EXAMPLE from "../../utils/code-example/code.example";
import { ListGroup } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Introduction = () => {
  return (
    <div className="introduction">
      <h2>Introduction</h2>
      <div className="content-text">
        {/* <CodeBox content={CODE_EXAMPLE.introduction.sample} /> */}

        <ListGroup></ListGroup>

        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>
                JavaScript (JS) is a high-level, interpreted programming
                language used for web development.
              </td>
            </tr>
            <tr>
              <td>
                It is synchronous, single-threaded, event-driven, and supports
                asynchronous programming.
              </td>
            </tr>
            <tr>
              <td>
                JavaScript is loosely typed and dynamically typed (no need to
                declare variable types explicitly).
              </td>
            </tr>
            <tr>
              <td>
                Runs in browsers (client-side) and on servers (Node.js -
                server-side execution).
              </td>
            </tr>
            <tr>
              <td>
                Used to create dynamic, interactive websites (DOM manipulation,
                event handling, animations).
              </td>
            </tr>
            <tr>
              <td>
                JavaScript has primitive data types (String, Number, Boolean,
                BigInt, Symbol, Undefined, Null) and non-primitive types
                (Object, Array, Function).
              </td>
            </tr>
            <tr>
              <td>
                Supports ES6+ features like let, const, arrow functions,
                classes, and modules.
              </td>
            </tr>
            <tr>
              <td>
                Supports OOP (Object-Oriented Programming) and Functional
                Programming paradigms.
              </td>
            </tr>
            <tr>
              <td>
                Uses the V8 Engine (Chrome), SpiderMonkey (Firefox), and
                JavaScriptCore (Safari) for execution.
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Introduction;
