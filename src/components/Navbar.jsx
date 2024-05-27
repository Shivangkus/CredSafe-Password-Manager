import React from "react";
import { Github, } from "lucide-react";

import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-purple-200 text-black">
      <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">
        <div className="logo font-bold text-2xl">
          <span className="text-purple-500">&lt;</span>
          Cred
          <span className="text-purple-500">Safe/&gt;</span>
        </div>
        {/* <ul>
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
        </ul>  */}
        <Button className='bg-purple-700 font-bold rounded-full'>
          <Github className="mr-2 h-4 w-4 text-black" /> Github
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
