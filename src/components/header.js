import React from "react";
import 'tailwindcss/tailwind.css';

const Header = () => {

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex flex-col w-full justify-center">
        <div className="flex flex-col w-full justify-center">
          <p className="flex">Finance &amp; Economics Club, IIT Guwahati's</p>
          <p></p>
          <span className="text-4xl">
            <div className="">Introductory Options</div>
          </span>
          <span className="welcome-title">
            <p className="welcome-title"><strong>India's only Free Course on Options and Derivatives...</strong></p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;