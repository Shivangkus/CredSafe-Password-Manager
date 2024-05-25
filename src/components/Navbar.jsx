import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 text-black">
      <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">
        <div className="logo font-bold text-2xl">
          <span className="text-purple-500">&lt;</span>
          Cred
          <span className="text-purple-500">Safe/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="/about">
              About
            </a>
            <a className="hover:font-bold" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
