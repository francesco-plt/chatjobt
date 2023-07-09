import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-emerald-500 dark:bg-emerald-300 shadow-md">
      <nav className="mx-auto max-w-full px-4">
        <div className="flex items-center justify-between">
          <div className="content-center">
            <a
              href="/"
              className="font-bold text-2xl text-white dark:text-zinc-800 hover:text-zinc-200 dark:hover:text-zinc-600"
            >
              ChatJoBT
            </a>
            <p className="text-sm text-zinc-200 dark:text-zinc-600">
              Just fill the form and get your cover letter in seconds!
            </p>
          </div>
          <div className="flex items-center">
            <a
              href="https://github.com/francesco-plt"
              className="text-white hover:text-zinc-200 dark:text-zinc-800 dark:hover:text-zinc-600 ml-6"
            >
              My GitHub
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
