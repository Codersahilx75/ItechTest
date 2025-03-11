import React from "react";
import Header from "./Header"; // Ensure correct path
import Footer from "./Footer";
//import Footer from "./Footer"; // Ensure correct path

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    <Footer/>
    </div>
  );
}

