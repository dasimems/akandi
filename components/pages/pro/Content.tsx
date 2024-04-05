import Button from "@/components/general/Button";
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
          <li>
            <b>A bigger selection</b> - One would rather choose a candy store
            that offers 100 varieties, instead of just 10. Now you can browse
            through passenger cars, light trucks, heavy machinery, trucks, and
            recreational vehicles – or just choose the category that suits you
            best, of course.
          </li>
          <li>
            <b>More potential buyers when selling</b> - Yep, with the merger, we
            now have more potential buyers at {siteName}, which is positive for
            you when you&apos;re selling.
          </li>
          <li>
            <b>Access to broad vehicle expertise</b> - Now we gather all our
            vehicle experts under one roof! This makes us pros in everything
            from passenger cars and mini excavators to substantial load carriers
            and fire excavators. What would you like to ask us?
          </li>
        </ul>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
          An account is all you need.
        </h1>
        <p>
          If you earlier have used {siteName} to buy or sell heavy machinery and
          vehicles, and recreational vehicles, we want to welcome you a bit
          extra to {siteName}. If you want to continue buying and selling these
          kind of vehicles, you need to create a company account at {siteName}.
          This applies to both corporate customers and if you have a sole
          proprietorship.
        </p>

        <Button type="primary" className="self-start">
          <span>Create company account</span>
        </Button>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
          What&apos;s in it for you, with an account?
        </h1>
        <ul className="list-disc list-inside pl-2 flex flex-col gap-4">
          <li>
            <b>All in one place. </b> Everything connected to when you are
            searching, buying and selling a vehicle, we collect it for you at
            &quot;My pages&quot;. From here you can follow along during your
            whole buying or selling process.
          </li>
          <li>
            <b>Your favorites and saved searches.</b> You can easily mark you
            favorite vehicles by clicking the heart when you find one you like.
            Not having the luck to find your favorite right away? No worries,
            create a saved search from your filters and we will get back to you
            when we find something that suits you.
          </li>
        </ul>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
          Reach out to more buyers when selling
        </h1>

        <p>
          Time to sell any heavy machinery and vehicles or recreational
          vehicles?´Now youare able to reach out to more buyers than you have
          through {siteName}. Make an interest to sell below and we will give
          you an estimated sales price.
        </p>

        <Button type="primary" className="self-start">
          <span>Get evaluation here</span>
        </Button>
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
          Any questions?
        </h1>
        <p>
          We are here for you! Reach out to you sales contact or call our
          Customer Service Center at +4610-167 30 00 or email at
          customercars@kvdcars.com.
        </p>
      </div>
    </SectionContainer>
  );
};

export default Content;
