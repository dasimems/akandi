import { buyUsedHero } from "@/assets/images";
import Image from "next/image";
import React from "react";

const BuyUsed = () => {
  return (
    <section className="flex justify-center">
      <div>
        <div>
          <Image src={buyUsedHero} alt="" />
        </div>
        <div>
          <h3>We know used cars </h3>
          <p>This is where you find your next ride</p>
        </div>
      </div>
      <div>
        <h3>Buying a used car?This is how you do it!</h3>
        <article>
          At Akandi online you find hundreds ofo cars for sale every week that
          are thoroughly tested. You choose to buy cars through bidding or at a
          fixed price.Some cars are like in mint condition, while others need a
          little love.But they are all looking for a new owner to sit in the
          driver&apos;s seat.
        </article>
        <h4>You choose buying method-bidding or fixed price</h4>
        <p>
          when you find your next car at akandi online,you choose the buying
          method that suits you:bidding or fixed price
        </p>
        <h5>Buy through bidding</h5>
        <ul>
          <li>
            just pay SEK 500 more than anyone else would have given for the car.
          </li>
          <li>
            Choose to place a maximum bid and your bid will automatically
            increase to the level you have{" "}
          </li>
          <li>if you win the bidding,we will contact you and close the deal</li>
        </ul>
        <h4>Buy at fixed price</h4>
        <ul>
          <li>Avoid waiting or risking being outbid.</li>
          <li>Possible up to 48 hours before the auction ends.</li>
          <li>
            You reserve the car and we will call you to help you with the
            purchase.{" "}
          </li>
        </ul>
        <p>
          Read more about buying a used car at fixed price at akandi online{" "}
          <span>here</span>
        </p>
      </div>
    </section>
  );
};

export default BuyUsed;
