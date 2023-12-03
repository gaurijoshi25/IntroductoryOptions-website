import React from "react";
import 'tailwindcss/tailwind.css';
import logo from '../images/logo.png';

const Header = () => {

  return (
    <div className="flex flex-col w-full justify-center">
      <div className="flex w-full justify-center mb-8">
        <div className="flex object-cover h-20 mr-4">
          <img src={logo} alt="FEC-logo"></img>
        </div>
        <div className="flex flex-col w-full justify-center">
          <p className="flex">Finance &amp; Economics Club, IIT Guwahati's</p>
          <p></p>
          <span className="text-4xl">
            <div className="">Introductory Options</div>
          </span>
          <span className="welcome-title">
            <p className="welcome-title"><strong>A 3 week course on options and it's strategies</strong></p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;