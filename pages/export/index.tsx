import { exportHero } from "@/assets/images";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const Exporting = () => {
  return (
    <>
      <section className="flex justify-center">
        <div>
          <Image src={exportHero} alt="" width={1920} />
          <div>
            <h3>Export through Akandi 0nline</h3>
          </div>
        </div>
      </section>
      <section className="flex justify-center">
        <div>
          <div>
            <Link href="">How to export cars through AKandi online</Link>
            <Link href="">
              Akandi online does not export to Russia or Belarus
            </Link>
            <Link href="">Deregistration,payment.transport and retrieval</Link>
            <Link href="">
              Price list for administrative work relating to export
            </Link>
            <Link href="">Contact us</Link>
          </div>
          {/* side bardiv */}
          <main>
            <div>
              <h3>How to export cars through akandi online</h3>
              <p>
                Most cars sold on Akandi online can be exported,but not all.in
                the car&apos;s advertisement under car facts and then other
                information you can find information on whether the specific car
                you are looking at is possible to export. Choose &ldquo;Can be
                exported&ldquo; in our filter view, you can easily search for
                all cars that can be exported. Here you can also search for cars
                with deductible VAT. This information can be found under
                &ldquo;Other information&ldquo;.
              </p>
            </div>
            <div>
              <h3>Kvdcars does not export vehicles to Russia or Belarus</h3>
              <article>
                Due to Russia&apos;s invasion of Ukraine, Kvdcars does not
                currently export any vehicles to Russia or Belarus.
              </article>
            </div>

            <div>
              <h3>Deregistration, payment, transport and retrieval</h3>
              <article>
                Once a car has been purchased by an export buyer through
                Kvdcars, it will be deregistered in Sweden and the existing
                number plate will be removed
                <span> We do not arrange any temporary plates.</span> The
                easiest way for you as the buyer is to have a transport company
                collect the car and transport it to the desired country.
              </article>
            </div>
            <div>
              <h6> Payment and pickup</h6>
              <article>
                {" "}
                Payment must be made within two working days and made via bank
                transfer. We are not able to offer payment by bank loan for
                vehicles that are exported.
              </article>
              <p>
                Please note that regardless of the retrieval method, the car
                should be picked up within eight working days from the completed
                auction. After eight working days, a charge for storage may be
                charged, according to our terms.
              </p>
            </div>
            <div>
              <h4>Carrier&apos;s guarantee</h4>
              <article>
                If you select a carrier with guarantee, the guarantee must
                contain information about the requester of the shipment, the
                pickup address, the delivery address, car markings, (VIN of
                registered vehicle), the carrier&apos;s VAT number and the
                carrier&apos;s signature.
              </article>
              <p>
                Costs for declaration and customs duty are not included in our
                export service and must therefore be arranged by the purchaser
              </p>
            </div>
            <div>
              <h4>The following rules apply to export out of Sweden:</h4>
              <article>
                If the car is exported from Sweden to another EU country and a
                company with a valid VAT number is the registered buyer, no VAT
                needs to be paid upon purchase. However, a deposit corresponding
                to the VAT needs to be paid. The deposit sum varies between a
                minimum of SEK 8,000 and a maximum of 25% of the price of the
                car, depending on the car. For more information see our terms
                and conditions.
              </article>
              <article>
                if the car is exported to another EU country and a company
                without a valid VAT number or a private individual is the
                registered buyer, VAT needs to be paid upon purchase. A deposit
                of SEK 8,000 also must be obtained.
              </article>
              <article>
                If the car is exported to a country outside the EU and a company
                is the registered buyer, the buyer does not pay VAT on the car.
                However, a deposit corresponding to the VAT needs to be paid.
                The deposit sum varies between a minimum of SEK 8,000 and a
                maximum of 25% of the price of the car, depending on the car.
                For more information see our terms and conditions.
              </article>
              <article>
                If the car is exported to a country outside the EU or to Åland
                and a private individual is the registered buyer, the buyer will
                not pay Swedish VAT on the car but needs to pay a deposit. The
                deposit sum varies between a minimum of SEK 8,000 and a maximum
                of 25% of the price of the car, depending on the car. For more
                information see our terms and conditions.
              </article>
            </div>
            <div>
              <h3>We can assist with CMR documentation</h3>
              <p>
                Kvdil can produce CMR documentation for your export. When this
                documentation exists, we do not charge a deposit.
              </p>
            </div>
            <div>
              <h4>Price list for administrative work relating to export</h4>
              <article>
                Depending on what car is being exported, which country the car
                is being transported to and how you choose to collect your car
                after purchase, different prices for administrative work apply
                as indicated below. For exact price information about your
                matter, please contact us.
              </article>
            </div>
            <div>
              <h6>Price list</h6>
              <p>For collection without a forwarding agent warranty</p>
              <hr />
              <p>from SEC k 2795 including vat</p>
              <hr />
              <article>
                All prices are including VAT and apply to exports within and
                outside the EU. The exact price you will pay depends on the
                car&apos;s size and the country to which you want to export it.
                Costs for declaration and customs duty are not included in our
                export service and are arranged by the buyer.
              </article>
            </div>
            <div>
              <h3>contact us </h3>
              <p>
                If you have any questions regarding export you are wellcome to
                contact our Customer Service Centre on +4610 167 30 00 or
                export@Akandi online
              </p>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Exporting;
