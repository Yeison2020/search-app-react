import React from "react";
import Search from "./Search";

const Header = ({ formInput }) => {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          {" "}
          ☮{" "}
        </span>
        gregsList
      </h1>
      <Search formInput={formInput} />
    </header>
  );
};

export default Header;
