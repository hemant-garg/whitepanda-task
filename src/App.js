import React from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Homepage from "./components/Homepage/Homepage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
