import Button from "react-bootstrap/Button";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h3 className="error-code">404</h3>
      <p className="error-message">
        The page you are looking for does not exist.
      </p>
      <Button variant="outline-dark" href="/">
        Go to home
      </Button>
    </div>
  );
};

export default ErrorPage;
