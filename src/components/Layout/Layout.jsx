import React from "react";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <div className="layout-content">
      <Header />
      {children}
      <div className="footer"></div>
    </div>
  );
}
