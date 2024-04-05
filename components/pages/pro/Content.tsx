import SectionContainer from "@/components/layouts/SectionContainer";
import { siteName } from "@/utils/_variables";
import React from "react";

const Content = () => {
  return (
    <SectionContainer className="flex flex-col items-center py-10 md:py-2o">
      <div className="flex flex-col w-full max-w-[50rem]  gap-6">
        <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
          Akandi Pro
        </h1>

        <p className="font-medium">
          We are now heavier than ever – several and heavier vehicles, that is!
          Now you can not only find cars, light trucks and recreational vehicles
          in our garage at {siteName}, but also heavy machinery and vehicles.
        </p>
        <p className="font-medium">
          {siteName} is one of Sweden&apos;s largets marketplaces for used cars.
          And now we have become even bigger when we have joined forces with{" "}
          {siteName}, that sold heavy machinery, trucks and recreational
          vehicles. Our merge is a benefit for you, both as a buyer and a
          seller.
        </p>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
          Advantages
        </h1>
        <ul className="list-disc list-inside pl-2 flex flex-col gap-4">
          <li>
            <b>Buy and sell a wide range of vehicles at one place</b> - Have you
            managed different types of vehicles at different places? Stop
            searching, now you can stay on one website, whether you&apos;re
            buying or selling.
          </li>
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Content;
