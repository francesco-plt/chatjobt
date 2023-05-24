import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 py-6 fixed w-full top-0 left-0">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="content-center">
            <a href="/" className="font-bold text-2xl text-white">
              ChatJoBT
            </a>
            <p className="text-gray-400 text-sm">
              Just fill the form and get your cover letter in seconds!
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/francesco-plt/chatjobt"
              className="text-gray-300 hover:text-white ml-6"
            >
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
