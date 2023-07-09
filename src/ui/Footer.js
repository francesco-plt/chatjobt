import React from "react";

const Footer = () => {
  return (
    <footer className="rounded-md text-zinc-300 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-zinc-400 text-sm">
          © {new Date().getFullYear()} Francesco Pallotta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
