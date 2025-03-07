import Button from "react-bootstrap/Button";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h2 class="error-code">404</h2>
      <p class="error-message">
        Oops! The page you are looking for does not exist.
      </p>
      <Button variant="outline-dark" href="/">
        Go to home
      </Button>
    </div>
  );
};

export default ErrorPage;
