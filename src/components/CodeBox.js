const CodeBox = (props) => {
  const { content } = props;
  return (
    <div className="codebox">
      <div className="code">
        <h3>Example</h3>
        <pre>
          <code>
            {content}
          </code>
          </pre>
      </div>
    </div>
  );
};

export default CodeBox;
