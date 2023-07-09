import React, { useState, useEffect } from "react";
import {Outlet} from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";


const Layout = () => {

          return (
    <>
        <Header className="fixed w-full top-0 left-0"/>
      <div className="flex flex-col flex-grow min-h-screen dark:bg-zinc-800">
        <main className="">
              <Outlet />
      </main>
        <Footer className="absolute bottom-0 w-full"/>
        </div>
    </>
  );
};

export default Layout;