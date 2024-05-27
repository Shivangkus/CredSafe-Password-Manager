import React from "react";

export const Footer = () => {
  return (
    <div className="bg-purple-200 flex flex-col justify-center items-center w-full fixed bottom-0 py-0">
      <div>
        <div className="logo font-bold text-2xl">
          <span className="text-purple-500">&lt;</span>
          Cred
          <span className="text-purple-500">Safe/&gt;</span>
        </div>
      </div>
      <div className="flex justify-center items-center">© 2024 CredSafe. All rights reserved.</div>
    </div>
  );
};
