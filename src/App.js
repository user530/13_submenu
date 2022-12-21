import React from "react";
import { useAppContext } from "./context";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import Hero from "./Hero";

const App = () => {
  const { data } = useAppContext();

  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
};

export default App;
