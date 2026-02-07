import React from "react";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 left-0 right-0 z-50 text-white">
      <div className="navbar-start"></div>
      <div className="navbar-center mt-2">
        <a>
          <img
            src="/assets/long-langdays-logo-white.png"
            alt="logo"
            className="w-40 h-10"
            // md:w-60 md:h-16 lg:w-60 lg:h-16 xl:w-60 xl:h-16 
          />
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;