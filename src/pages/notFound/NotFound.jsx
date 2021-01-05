import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
function NotFound() {
  return (
    <div className="notfound__main">
      <button className="button__content">
        <Link className="button__link"to="/">Back to home</Link>
      </button>
    </div>
  );
}

export default NotFound;
