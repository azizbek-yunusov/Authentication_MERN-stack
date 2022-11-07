import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const destoryLocalStorage = () => {
    localStorage.removeItem("token")
    window.location.reload();
  }
  const renderLinks = () => {
    const token = localStorage.getItem("token");
    return (
      <>
        {!token ? (
          <>
            <Link className="navbar-brand" to="/register">
              Sign Up
            </Link>
            <Link className="navbar-brand" to="/login">
              Sign In
            </Link>
          </>
        ) : (
          <button onClick={destoryLocalStorage} className="btn btn-danger">
            Log out
          </button>
        )}
      </>
    );
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {renderLinks()}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                #
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
