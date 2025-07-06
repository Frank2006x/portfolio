import React from "react";
import Herotext from "../components/Herotext";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section className="flex items-start overflow-hidden justify-center md:items-start md:justify-start min-h-screen c-space">
      <Herotext />
      <ParallaxBackground />
      
    </section>
  );
};

export default Hero;
