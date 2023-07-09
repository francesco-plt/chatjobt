import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-emerald-500 dark:bg-emerald-300 shadow-md">
      <nav className="mx-auto max-w-full px-4">
        <div className="flex items-center justify-between">
          <div className="content-center">
            <a
              href="/"
              className="font-bold text-2xl text-white dark:text-gray-800 hover:text-gray-200"
            >
              ChatJoBT
            </a>
            <p className="text-sm text-gray-200 dark:text-gray-600">
              Just fill the form and get your cover letter in seconds!
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/francesco-plt/chatjobt"
              className="text-white hover:text-gray-200 dark:text-gray-700 ml-6"
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
