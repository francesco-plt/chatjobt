import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import HomePage from "./ui/HomePage.js";
import ResultPage from "./ui/ResultPage.js";
import NotFoundPage from "./ui/NotFoundPage.js";
import ErrorPage from "./ui/ErrorPage.js";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
