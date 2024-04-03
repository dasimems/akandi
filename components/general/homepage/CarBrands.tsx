import SectionContainer from "@/components/layouts/SectionContainer";
import React from "react";

const CarBrands = () => {
  return (
    <SectionContainer className="py-20">
      <h1 className="font-medium">Car brands</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3"></div>
    </SectionContainer>
  );
};

export default CarBrands;
