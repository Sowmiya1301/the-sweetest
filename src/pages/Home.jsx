import React from "react";
import Hero from "../components/home/Hero";
import CategoryShowcase from "../components/CategoryShowcase";
import About from "./About";

function Home() {
  return (
    <>
      <Hero />
      <CategoryShowcase />
      <About />
    </>
  );
}

export default Home;
