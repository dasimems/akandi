import React from "react";
import App from "./_app";
import Hero from "@/components/general/homepage/HeroContent";
import Selections from "@/components/general/homepage/Selections";
import WorthKnowing from "@/components/general/homepage/WorthKnowing";
import WhyUs from "@/components/general/homepage/WhyUs";
import CarList from "@/components/general/homepage/CarList";
import NewsLetter from "@/components/general/homepage/NewsLetter";
import Reviews from "@/components/general/homepage/Reviews";

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
