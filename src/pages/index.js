import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { SideBar } from "../components/SideBar/index";
import { HeroSection } from "../components/HeroSection/index";
import { InfoSection } from "../components/InfoSection/index";
import {
  HomeObjOne,
  HomeObjTwo,
  HomeObjThree,
} from "../components/InfoSection/Data";

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
      <InfoSection {...HomeObjOne} />
      <InfoSection {...HomeObjTwo} />
      <InfoSection {...HomeObjThree} />
    </>
  );
};
