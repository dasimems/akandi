import { sellUsedHero } from "@/assets/images";
import Button from "@/components/general/Button";
import Image from "next/image";
import React from "react";

const SellCars = () => {
  return (
    <section className="flex justify-center">
      <div>
        <Image src={sellUsedHero} alt="" />
        <h4>You are in the driver&apos;s seat </h4>
      </div>
      <div>
        <h4>How we sell your car</h4>
        <p>
          To <span> sell the car </span> should be easy and safe.you choose how
          you want to sellane we take care of the entire sale for you!
        </p>
      </div>
      <div>
        <h4>You choose the selling method</h4>
        <article>
          You can either choose that Akandi online buys your car and you get
          paid directly or that we sell it for you.The buyer can then choose to
          participate in the bidding or pay a fixed price for the car.You Choose
          the minimum selling price,we call it the reserve price which selling
          method suits you best?
        </article>
        <h5>paid right away </h5>
        <ul>
          <li>A quick deal</li>
          <li> Money transferred within three days </li>
          <li> You sell the cars to us </li>
        </ul>
        <h5>Bidding & fixed price</h5>
        <ul>
          <li>Always market price </li>
          <li>Marketed in Sweden and Europe</li>
          <li>we do all the work for you</li>
        </ul>
        <Button>Get a valuation</Button>
        <h4>A notice of interest is not binding</h4>
        <article>
          A notice of interest to <span>sell your car </span> with us is free of
          charge and not binding.we give you an estimated sales price based on
          statistics from our annual 26,000 sales and data-driven valuations
          from our sister company.the more information you provide about your
          car,the more accurate valuation and estimated selling price you get
        </article>

        <h4>We take care of the whole sales process</h4>
        <article>
          Before a car is put up for sale,it is tested and the documentation
          forms the basics for the car&apos;s description at Akandi online.in
          this way,the future buyer knows the actual condition of the car and
          does not have to take into account unforeseen expenses.it also
          benefits you as a seller-because the buyer is then willing to pay for
          more car.
          <span>
            When we recieve the car,we test it,clean it,wasj it and take photos
            before we publish it at akandi online in addition to our own
            channels,we also market the car at Goggle,via various buying and
            selling sites and social media All so that you get paid as well as
            possible.After the bidding is completed or someone has bought the
            car at a fixed price ,we contact the buyer,arrange the change of
            ownership and make sure you get paid.
          </span>
        </article>
        <h5>What does a sale cost?</h5>
        <article>
          When the car is sold,we charge a commission and this depends on your
          sselling price.The commission, which is minimum of SEK 10,000 for
          private individuals,includes washing,testing,valuation,marketing,sales
          and handling of any complaints.
        </article>
        <p>
          if you choose to sell the car directly to us,we do not charge any
          commission
        </p>
      </div>
    </section>
  );
};

export default SellCars;
