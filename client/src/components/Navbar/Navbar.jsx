import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="left-container">
        <h1>
          <Link to={ROUTES.ROOT}>Form Builder</Link>
        </h1>
      </div>
      <div className="right-container">
        <Link to={ROUTES.ROOT}>Form Builder</Link>
        <Link to={ROUTES.VEIW_FORMS}>View Forms</Link>
      </div>
    </nav>
  );
};

export default Navbar;
