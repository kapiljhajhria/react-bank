import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { SideBar } from "../components/SideBar/index";
import { HeroSection } from "../components/HeroSection/index";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </>
  );
};
