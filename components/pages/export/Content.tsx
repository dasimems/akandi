import SectionContainer from "@/components/layouts/SectionContainer";
import { siteName, Socials } from "@/utils/_variables";
import React from "react";

const Content = () => {
  return (
    <SectionContainer className="py-10 md:py-20 flex flex-col items-center">
      <div className="w-full max-w-[50rem] flex flex-col gap-6">
        <h1 className="font-medium text-lg sm:text-xl md:text-2xl">
          How to export a car through {siteName}
        </h1>
        <p>
          Most cars sold on {siteName} can be exported, but not all. In the
          car’s advertisement, under Car facts and then Other information, you
          can find information on whether the specific car you are looking at is
          possible to export. Choose &quot;Can be exported&quot; in our filter
          view, you can easily search for all cars that can be exported. Here
          you can also search for cars with deductible VAT. This information can
          be found under &quot;Other information&quot;.
        </p>
        <h1 className="font-medium text-lg sm:text-xl md:text-2xl">
          {siteName} does not export vehicles to Russia or Belarus
        </h1>
        <p>
          Due to Russia&apos;s invasion of Ukraine, {siteName} does not
          currently export any vehicles to Russia or Belarus.
        </p>
        <h1 className="font-medium text-lg sm:text-xl md:text-2xl">
          Deregistration, payment, transport and retrieval
        </h1>
        <p>
          Once a car has been purchased by an export buyer through akandicars,
          it will be deregistered in Sweden and the existing number plate will
          be removed. We do not arrange any temporary plates. The easiest way
          for you as the buyer is to have a transport company collect the car
          and transport it to the desired country.
        </p>
        <h1 className="font-medium sm:text-lg md:text-xl">
          Payment and pickup
        </h1>
        <p>
          Payment must be made within two working days and made via bank
          transfer. We are not able to offer payment by bank loan for vehicles
          that are exported.
        </p>
        <p>
          Please note that regardless of the retrieval method, the car should be
          picked up within eight working days from the completed auction. After
          eight working days, a charge for storage may be charged, according to
          our terms.
        </p>
        <h1 className="font-medium sm:text-lg md:text-xl">
          Carrier&apos;s guarantee
        </h1>
        <p>
          If you select a carrier with guarantee, the guarantee must contain
          information about the requester of the shipment, the pickup address,
          the delivery address, car markings, (VIN of registered vehicle), the
          carrier&apos;s VAT number and the carrier&apos;s signature.
        </p>
        <p>
          Costs for declaration and customs duty are not included in our export
          service and must therefore be arranged by the purchaser.
        </p>
        <h1 className="font-medium sm:text-lg md:text-xl">
          The following rules apply to export out of Sweden:
        </h1>
        <ul className="list-disc list-inside pl-2 flex flex-col gap-4">
          <li>
            If the car is exported from Sweden to another EU country and a
            company with a valid VAT number is the registered buyer, no VAT
            needs to be paid upon purchase. However, a deposit corresponding to
            the VAT needs to be paid. The deposit sum varies between a minimum
            of SEK 8,000 and a maximum of 25% of the price of the car, depending
            on the car. For more information see our terms and conditions.
          </li>
          <li>
            If the car is exported to another EU country and a company without a
            valid VAT number or a private individual is the registered buyer,
            VAT needs to be paid upon purchase. A deposit of SEK 8,000 also must
            be obtained.
          </li>
          <li>
            If the car is exported to a country outside the EU and a company is
            the registered buyer, the buyer does not pay VAT on the car.
            However, a deposit corresponding to the VAT needs to be paid. The
            deposit sum varies between a minimum of SEK 8,000 and a maximum of
            25% of the price of the car, depending on the car. For more
            information see our terms and conditions.
          </li>
          <li>
            If the car is exported to a country outside the EU or to Åland and a
            private individual is the registered buyer, the buyer will not pay
            Swedish VAT on the car but needs to pay a deposit. The deposit sum
            varies between a minimum of SEK 8,000 and a maximum of 25% of the
            price of the car, depending on the car. For more information see our
            terms and conditions.
          </li>
        </ul>

        <h1 className="font-medium sm:text-lg md:text-xl">
          We can assist with CMR documentation
        </h1>
        <p>
          {siteName} can produce CMR documentation for your export. When this
          documentation exists, we do not charge a deposit.
        </p>

        <h1 className="font-medium text-lg sm:text-xl md:text-2xl">
          Price list for administrative work relating to export
        </h1>
        <p>
          Depending on what car is being exported, which country the car is
          being transported to and how you choose to collect your car after
          purchase, different prices for administrative work apply as indicated
          below. For exact price information about your matter, please contact
          us.
        </p>
        <h1 className="font-medium sm:text-lg md:text-xl">Price list</h1>
        <p>
          For collection without a forwarding agent warranty:{" "}
          <u>from SEK 2 795 including VAT</u>
        </p>

        <p>
          All prices are including VAT and apply to exports within and outside
          the EU. The exact price you will pay depends on the car&apos;s size
          and the country to which you want to export it. Costs for declaration
          and customs duty are not included in our export service and are
          arranged by the buyer.
        </p>
        <h1 className="font-medium text-lg sm:text-xl md:text-2xl">
          Contact us
        </h1>
        <p>
          If you have any questions regarding export you are wellcome to contact
          our Customer Service Centre on {Socials.Call.label} or{" "}
          {Socials.Mail.label}
        </p>
      </div>
    </SectionContainer>
  );
};

export default Content;
