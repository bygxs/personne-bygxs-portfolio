import { JSX } from "react";

export default function NotFoundPage(): JSX.Element {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Go back to Home
      </a>
    </div>
  );
}
