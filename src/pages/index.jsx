import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import NetbookSection from "../components/NetbookSection";
import NetbookSectionTwo from "../components/NetbookSelectionTwo";
import Footer from "../components/Footer";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <NetbookSection />
      <NetbookSectionTwo />
      <Footer/>

    </>
  );
};

export default Home;
