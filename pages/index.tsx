import React from "react";
import App from "./_app";
import Hero from "@/components/pages/homepage/HeroContent";
import Selections from "@/components/pages/homepage/Selections";
import WorthKnowing from "@/components/pages/homepage/WorthKnowing";
import WhyUs from "@/components/pages/homepage/WhyUs";
import CarList from "@/components/pages/homepage/CarList";
import NewsLetter from "@/components/pages/homepage/NewsLetter";
import Reviews from "@/components/pages/homepage/Reviews";

const Home = () => {
  return (
    <>
      <Hero />
      <Selections />
      <WorthKnowing />
      <CarList />
      <WhyUs />
      <Reviews />
      <NewsLetter />
    </>
  );
};

export default Home;
